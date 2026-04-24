import { useRef } from "react";

export default function AnimatedBorderButton({
  children,
  href,
  onClick,
  className = "",
  size = "default",
}) {
  const ref = useRef(null);

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.12}px, ${y * 0.15}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  const sizeClasses = {
    sm: "px-5 py-2 text-sm",
    default: "px-7 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes =
    "group relative inline-flex items-center justify-center rounded-full " +
    "bg-surface/40 text-foreground font-semibold backdrop-blur-sm " +
    "transition-transform duration-300 ease-out will-change-transform " +
    "hover:bg-surface/70 cursor-pointer " +
    sizeClasses[size] + " " + className;

  const inner = (
    <>
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 300 60"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="animated-border-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <rect
          x="1"
          y="1"
          width="298"
          height="58"
          rx="30"
          ry="30"
          fill="none"
          stroke="url(#animated-border-gradient)"
          strokeWidth="2"
          strokeDasharray="180 520"
          strokeLinecap="round"
          className="animated-border-path"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={onClick}
        className={classes}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={classes}
    >
      {inner}
    </button>
  );
}
