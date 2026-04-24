import { useEffect, useRef, useState } from "react";

/**
 * Curseur personnalise avec :
 *  - point central (suit instantanement la souris)
 *  - anneau qui suit avec un leger retard
 *  - s'agrandit au survol des liens/boutons
 *  - masque sur mobile
 */
export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Detection mobile : pas de cursor custom
    if (window.matchMedia("(max-width: 768px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf = null;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleLeave = () => setVisible(false);

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${hovered ? 1.8 : 1})`;
      }
      raf = requestAnimationFrame(animateRing);
    };

    // Detection hover sur elements interactifs
    const handleOver = (e) => {
      const target = e.target;
      if (
        target.closest("a, button, input, textarea, [role='button'], [data-cursor='hover']")
      ) {
        setHovered(true);
      }
    };
    const handleOut = (e) => {
      const target = e.target;
      if (
        target.closest("a, button, input, textarea, [role='button'], [data-cursor='hover']")
      ) {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);
    raf = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [hovered]);

  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#22d3ee",
          boxShadow: "0 0 12px rgba(34,211,238,0.8)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s",
          mixBlendMode: "screen",
        }}
      />
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: `1.5px solid ${hovered ? "#ec4899" : "#a855f7"}`,
          background: hovered ? "rgba(236,72,153,0.1)" : "transparent",
          opacity: visible ? 1 : 0,
          transition: "border-color 0.25s, background 0.25s, opacity 0.2s, width 0.2s, height 0.2s",
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
