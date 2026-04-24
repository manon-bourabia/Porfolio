import { motion } from "framer-motion";

/**
 * Texte qui apparait lettre par lettre avec reveal 3D.
 * Props :
 *  - text : la chaine a animer
 *  - className : classes appliquees au wrapper
 *  - delay : delai initial en secondes
 *  - stagger : delai entre chaque lettre (default 0.04)
 *  - as : balise HTML ("h1", "h2", "span"...) - default "span"
 */
export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  stagger = 0.04,
  as = "span",
}) {
  const Tag = motion[as] || motion.span;
  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: "100%", rotateX: -60 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 18,
      },
    },
  };

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
      style={{ display: "inline-block", perspective: 600 }}
    >
      {words.map((word, wi) => (
        <span
          key={wi}
          style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.25em" }}
        >
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              variants={letter}
              style={{ display: "inline-block", transformOrigin: "50% 100%" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
