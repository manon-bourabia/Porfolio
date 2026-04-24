/**
 * Blobs colores flous qui derivent lentement en background.
 * A placer en position: fixed sur le body pour un effet global.
 */
export default function GradientBlobs() {
  const blobs = [
    { color: "#a855f7", size: 520, top: "-10%", left: "-8%", delay: "0s",  duration: "24s" },
    { color: "#22d3ee", size: 480, top: "60%",  left: "70%", delay: "3s",  duration: "28s" },
    { color: "#ec4899", size: 420, top: "30%",  left: "85%", delay: "5s",  duration: "32s" },
    { color: "#7c3aed", size: 600, top: "75%",  left: "-10%", delay: "2s",  duration: "30s" },
    { color: "#06b6d4", size: 380, top: "40%",  left: "40%", delay: "7s",  duration: "35s" },
  ];

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Fond de base */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-2 to-background" />

      {/* Grille cyberpunk */}
      <div className="absolute inset-0 cyber-grid opacity-40" />

      {/* Blobs colores */}
      {blobs.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background: `radial-gradient(circle, ${b.color}33 0%, transparent 65%)`,
            filter: "blur(60px)",
            animation: `slow-drift ${b.duration} ease-in-out infinite`,
            animationDelay: b.delay,
          }}
        />
      ))}

      {/* Overlay de grain/noise subtil */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
