import { Button } from "../components/Button";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import AnimatedText from "../components/AnimatedText";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

const skills = [
  "IA", "JavaScript", "React", "React Native", "Node.js", "TypeScript",
  "HTML5", "CSS3", "Tailwind", "Next.js", "Express", "Figma",
  "Git", "Docker", "Github Actions", "PostgreSQL", "SQL", "WordPress", "PHP",
];

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent 0 2px, rgba(255,255,255,0.8) 2px 3px)" }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass font-mono text-xs uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                </span>
                <span className="text-secondary">Disponible maintenant</span>
              </span>
            </motion.div>
            <div className="space-y-3">
              <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="font-mono text-sm text-muted-foreground flex items-center gap-2">
                <span className="h-px w-8 bg-secondary" />
                Bonjour, moi c'est
              </motion.p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">
                <AnimatedText text="Manon El" className="block text-white" delay={0.1} />
                <AnimatedText text="Mokhtari" className="block gradient-text glow-text" delay={0.5} />
              </h1>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="flex items-center gap-3 pt-2">
                <div className="font-mono text-xl md:text-2xl text-foreground/80">
                  <span className="text-secondary">{"<"}</span>
                  <span className="mx-1">Developpeuse</span>
                  <span className="gradient-text-static font-bold">Fullstack</span>
                  <span className="text-secondary">{"/>"}</span>
                </div>
              </motion.div>
            </div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.6 }} className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Je concois et developpe des applications web et mobiles qui allient <span className="text-white font-medium">design soigne</span>, <span className="text-white font-medium">performance</span> et <span className="text-white font-medium">experience utilisateur</span>. Ancienne conseillere en economie sociale, j'apporte une sensibilite humaine au code.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }} className="flex flex-wrap gap-4">
              <Button href="#contact" size="lg">
                Contactez-moi <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton href="#projects" size="lg">
                <Sparkles className="w-5 h-5 text-secondary" />
                Voir mes projets
              </AnimatedBorderButton>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="flex items-center gap-5 pt-4">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Retrouvez-moi</span>
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-muted-foreground/40 to-transparent" />
              <a href="https://github.com/manon-bourabia" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary/50 transition-colors">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/manon-el-mokhtari-43199a3b7/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                <FaLinkedin size={18} />
              </a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative order-1 lg:order-2 mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
              <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 rounded-full bg-secondary/25 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
            </div>
            <div className="relative border-gradient p-1.5">
              <div className="relative rounded-[14px] overflow-hidden bg-surface">
                <img src="/projectImage/imgPp.jpg" alt="Manon El Mokhtari" className="w-full aspect-[4/5] object-cover transition-all duration-700 filter saturate-[0.6] contrast-110 hover:saturate-125 hover:contrast-100" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" style={{ animation: "slow-drift 8s ease-in-out infinite" }} />
                </div>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="absolute -bottom-6 -right-6 glass-strong rounded-2xl px-4 py-3 border border-secondary/30 shadow-[0_8px_30px_-10px_rgba(34,211,238,0.5)] animate-float max-w-[220px]" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative block w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Status</p>
                    <p className="text-sm font-bold">Ouverte aux offres</p>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="absolute -top-6 -left-6 glass-strong rounded-2xl px-4 py-3 border border-primary/30 shadow-[0_8px_30px_-10px_rgba(168,85,247,0.5)] animate-float">
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Focus</p>
                <p className="font-display text-2xl font-black gradient-text-static leading-none mt-1">React / Node</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="mt-24">
          <p className="text-center font-mono text-[10px] font-bold text-muted-foreground uppercase tracking-[0.5em] mb-6">- Stack technique -</p>
          <div className="relative flex overflow-hidden py-6 border-y border-white/5 bg-gradient-to-r from-background via-surface/30 to-background">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...skills, ...skills].map((skill, id) => (
                <span key={id} className="mx-10 text-2xl md:text-3xl font-display font-black text-white/20 hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-clip-text transition-all duration-300 cursor-default">
                  {skill}
                  <span className="text-secondary/30 ml-10">/</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-secondary transition-colors" aria-label="Defiler vers le bas">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-gentle-bounce" />
      </motion.a>
    </section>
  );
};
