import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "A propos" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks
        .map((l) => document.querySelector(l.href))
        .filter(Boolean);
      const current = sections.find((s) => {
        const rect = s.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      setActive(current ? "#" + current.id : "");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const closeAndGo = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={"fixed top-0 left-0 right-0 z-50 transition-all duration-500 " + (scrolled ? "py-3 backdrop-blur-xl bg-background/70 border-b border-white/5" : "py-5")}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center font-display font-black text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-shadow">
            M
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            Manon<span className="gradient-text-static">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-4">
          <div className="glass rounded-full px-2 py-1.5 flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={"relative px-4 py-2 text-sm rounded-full transition-colors " + (isActive ? "text-white" : "text-muted-foreground hover:text-white")}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>
          <Button size="sm" href="#contact">Contactez-moi</Button>
        </div>

        <button
          aria-label="Menu"
          className="md:hidden p-2 text-foreground rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass-strong border-t border-white/5"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeAndGo}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className="text-2xl font-display font-bold text-muted-foreground hover:text-white py-2 flex items-center gap-3 group"
                >
                  <span className="font-mono text-xs text-secondary">0{index + 1}</span>
                  <span className="group-hover:translate-x-2 transition-transform">{link.label}</span>
                </motion.a>
              ))}
              <div className="pt-4 mt-2 border-t border-white/5">
                <Button href="#contact" onClick={closeAndGo} className="w-full">Contactez-moi</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
