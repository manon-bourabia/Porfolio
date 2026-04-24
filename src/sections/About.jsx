import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const highlights = [
  { icon: Code2, color: "primary", title: "Clean Code", description: "Du code lisible, teste, pense pour etre maintenu sur le long terme." },
  { icon: Rocket, color: "secondary", title: "Performance", description: "Optimiser chaque interaction pour une experience fluide et rapide." },
  { icon: Users, color: "accent", title: "Collaboration", description: "Travailler main dans la main avec les equipes pour concretiser les idees." },
  { icon: Lightbulb, color: "highlight", title: "Innovation", description: "Rester curieuse des nouvelles technos et des bonnes pratiques." },
];

const colorMap = {
  primary: { text: "text-primary", bg: "bg-primary/10", border: "group-hover:border-primary/40", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)]" },
  secondary: { text: "text-secondary", bg: "bg-secondary/10", border: "group-hover:border-secondary/40", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)]" },
  accent: { text: "text-accent", bg: "bg-accent/10", border: "group-hover:border-accent/40", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.5)]" },
  highlight: { text: "text-highlight", bg: "bg-highlight/10", border: "group-hover:border-highlight/40", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(244,114,182,0.5)]" },
};

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 lg:sticky lg:top-32">
            <SectionTitle
              tag="// 01 - A propos"
              title="Construisons le futur,"
              highlight="une ligne a la fois."
              align="left"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <p>
                Je suis une developpeuse fullstack basee a Bordeaux, en pleine reconversion apres plusieurs annees dans le social. Ce double parcours me permet d'aborder chaque projet avec autant d'<span className="text-white font-medium">empathie</span> que de <span className="text-white font-medium">rigueur technique</span>.
              </p>
              <p>
                J'aime les interfaces soignees, les animations qui ont du sens et le code qui tient la route. En ce moment je me concentre sur React, Node.js, et l'ecosysteme moderne du web.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="border-gradient p-6"
            >
              <p className="font-serif italic text-lg text-foreground leading-relaxed">
                "Coder, c'est avant tout creer une experience. Un bon produit se ressent autant qu'il s'utilise."
              </p>
            </motion.div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, id) => {
              const c = colorMap[item.color];
              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: id * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className={"group glass shine-card rounded-2xl p-6 border border-white/5 transition-all duration-500 " + c.border + " " + c.glow}
                >
                  <div className={"w-12 h-12 rounded-xl " + c.bg + " flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6"}>
                    <item.icon className={"w-6 h-6 " + c.text} />
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
