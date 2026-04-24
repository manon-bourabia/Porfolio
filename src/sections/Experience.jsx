import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Heart } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const experiences = [
  {
    period: "2023 -> Present",
    role: "Concepteur Developpeur d'Applications",
    company: "Formation - Titre RNCP Niveau 6",
    description: "Specialisation sur les architectures modernes et le developpement fullstack. Projets orientes React, Node.js, et bonnes pratiques DevOps.",
    technologies: ["React", "Node.js", "Tailwind", "Agile", "Docker"],
    icon: GraduationCap,
    accent: "primary",
    current: true,
  },
  {
    period: "Parcours precedent",
    role: "Conseillere en Economie Sociale Familiale",
    company: "Secteur Social",
    description: "Plusieurs annees d'accompagnement, de gestion de situations complexes et d'ecoute active. Des soft skills qui servent aujourd'hui le code et les utilisateurs.",
    technologies: ["Gestion de projet", "Analyse", "Empathie", "Communication"],
    icon: Heart,
    accent: "accent",
    current: false,
  },
];

const accentMap = {
  primary: {
    dot: "bg-primary", ring: "ring-primary/30",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.6)]",
    text: "text-primary", bg: "bg-primary/10",
    border: "border-primary/20 hover:border-primary/50",
    chipBg: "bg-primary/5", chipBorder: "border-primary/20",
  },
  accent: {
    dot: "bg-accent", ring: "ring-accent/30",
    glow: "shadow-[0_0_20px_rgba(236,72,153,0.6)]",
    text: "text-accent", bg: "bg-accent/10",
    border: "border-accent/20 hover:border-accent/50",
    chipBg: "bg-accent/5", chipBorder: "border-accent/20",
  },
};

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          tag="// 03 - Parcours"
          title="Mon"
          highlight="parcours."
          subtitle="Un chemin non lineaire qui m'a amenee au code - et qui fait toute ma force."
        />
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] timeline-glow md:-translate-x-1/2 origin-top"
          />
          <div className="space-y-20">
            {experiences.map((exp, id) => {
              const c = accentMap[exp.accent];
              const Icon = exp.icon;
              const isEven = id % 2 === 0;
              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: id * 0.2 }}
                  className="relative grid md:grid-cols-2 gap-8"
                >
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
                    <div className={"relative w-8 h-8 rounded-full " + c.bg + " border-2 border-background ring-4 " + c.ring + " flex items-center justify-center " + c.glow}>
                      <Icon className={"w-4 h-4 " + c.text} />
                      {exp.current && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                      )}
                    </div>
                  </div>
                  <div className={"pl-16 md:pl-0 " + (isEven ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16")}>
                    <div className={"group glass shine-card rounded-2xl p-8 border " + c.border + " transition-all duration-500"}>
                      <div className={"flex items-center gap-2 mb-3 font-mono text-xs " + c.text + " font-bold tracking-[0.2em] uppercase " + (isEven ? "md:justify-end" : "")}>
                        {exp.current && (
                          <span className="inline-flex w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        )}
                        {exp.period}
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white mb-1 leading-tight">{exp.role}</h3>
                      <p className="text-muted-foreground font-medium mb-4 flex items-center gap-2 md:justify-start">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{exp.description}</p>
                      <div className={"flex flex-wrap gap-2 " + (isEven ? "md:justify-end" : "")}>
                        {exp.technologies.map((t, i) => (
                          <span key={i} className={"px-3 py-1 " + c.chipBg + " border " + c.chipBorder + " text-[10px] rounded-full " + c.text + " font-bold uppercase tracking-wider"}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
