import { motion } from "framer-motion";

/**
 * Titre de section avec :
 *  - tag mono au-dessus ("// 01 - A propos")
 *  - titre avec mot mis en gradient
 *  - ligne lumineuse animee
 */
export default function SectionTitle({
  tag,
  title,
  highlight,
  subtitle,
  align = "center",
}) {
  const alignClasses = {
    center: "text-center items-center",
    left: "text-left items-start",
  };

  return (
    <div className={`flex flex-col gap-4 mb-16 ${alignClasses[align]}`}>
      {tag && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] uppercase text-secondary"
        >
          {tag}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1]"
      >
        {title}{" "}
        {highlight && (
          <span className="gradient-text italic font-serif font-normal">
            {highlight}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"
        style={{ transformOrigin: align === "left" ? "left" : "center" }}
      />
    </div>
  );
}
