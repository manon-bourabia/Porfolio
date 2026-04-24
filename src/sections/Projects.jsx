import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star, GitFork, Code } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa6";
import SectionTitle from "../components/SectionTitle";

const ProjectCard = ({ repo, index }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    ref.current.style.setProperty("--mx", `${x}px`);
    ref.current.style.setProperty("--my", `${y}px`);
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };

  const gradient =
    index % 3 === 0 ? "from-primary/40 to-secondary/20"
    : index % 3 === 1 ? "from-accent/40 to-primary/20"
    : "from-secondary/40 to-accent/20";

  return (
    <motion.a
      ref={ref}
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative block glass rounded-2xl p-6 border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/20 will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(400px circle at var(--mx) var(--my), rgba(168,85,247,0.15), transparent 40%)" }}
      />
      <div className={"absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br " + gradient + " blur-3xl opacity-30 group-hover:opacity-70 transition-opacity duration-500"} />
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-surface border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
            <Code className="w-4 h-4 text-primary" />
          </div>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
        </div>
        <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:gradient-text-static transition-all">
          {repo.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 min-h-[40px] line-clamp-2">
          {repo.description || "Developpement en cours..."}
        </p>
        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          {repo.language && (
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full" style={{ background: repo.language === "JavaScript" ? "#f7df1e" : repo.language === "TypeScript" ? "#3178c6" : repo.language === "CSS" ? "#22d3ee" : repo.language === "HTML" ? "#e34f26" : "#a855f7" }} />
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="w-3 h-3" /> {repo.stargazers_count || 0}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <GitFork className="w-3 h-3" /> {repo.forks_count || 0}
          </span>
        </div>
      </div>
    </motion.a>
  );
};

const Skeleton = () => (
  <div className="glass rounded-2xl p-6 border border-white/5 animate-pulse">
    <div className="w-10 h-10 rounded-lg bg-white/5 mb-4" />
    <div className="h-5 bg-white/5 rounded w-3/4 mb-3" />
    <div className="h-3 bg-white/5 rounded w-full mb-2" />
    <div className="h-3 bg-white/5 rounded w-5/6 mb-6" />
    <div className="h-px bg-white/5 my-4" />
    <div className="h-3 bg-white/5 rounded w-1/2" />
  </div>
);

export const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/manon-bourabia/repos?sort=updated&per_page=9")
      .then((res) => { if (!res.ok) throw new Error("fetch failed"); return res.json(); })
      .then((data) => {
        setRepos(data.filter((r) => !r.fork && r.name !== "mon-portfolio").slice(0, 6));
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          tag="// 02 - Projets"
          title="Ce que j'ai"
          highlight="construit."
          subtitle="Une selection de projets recents, directement connectee a mon GitHub."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {loading && [...Array(6)].map((_, i) => <Skeleton key={i} />)}
          {!loading && !error && repos.map((repo, i) => (
            <ProjectCard key={repo.id} repo={repo} index={i} />
          ))}
          {error && (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              Impossible de charger les projets GitHub pour le moment.
            </div>
          )}
        </div>
        <div className="text-center mt-12">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="https://github.com/manon-bourabia"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-secondary transition-colors group"
          >
            <Github className="w-4 h-4" />
            Voir tous mes projets sur GitHub
            <span className="inline-block transition-transform group-hover:translate-x-1">{"->"}</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
