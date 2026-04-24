import { useRef } from "react";

export const Button = ({
  className = "",
  size = "default",
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
}) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.2}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  const baseClasses =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold " +
    "transition-transform duration-300 ease-out will-change-transform " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 " +
    "focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary via-accent to-secondary text-white " +
      "shadow-[0_8px_40px_-8px_rgba(168,85,247,0.6)] hover:shadow-[0_8px_50px_-6px_rgba(168,85,247,0.8)]",
    secondary:
      "bg-surface text-foreground border border-white/10 hover:border-primary/50",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant] || variants.primary} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      <span
        aria-hidden
        className="absolute inset-y-0 -left-20 w-20 bg-white/25 blur-md skew-x-12 transition-transform duration-700 group-hover:translate-x-[400%]"
      />
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
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={classes}
    >
      {content}
    </button>
  );
};

export default Button;
