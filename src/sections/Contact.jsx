import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button } from "../components/Button";
import SectionTitle from "../components/SectionTitle";

const contactInfo = [
  { icon: Mail, label: "Email", value: "manon.elm@hotmail.com", href: "mailto:manon.elm@hotmail.com", color: "primary" },
  { icon: Phone, label: "Telephone", value: "+33 7 62 18 89 29", href: "tel:+33762188929", color: "secondary" },
  { icon: MapPin, label: "Localisation", value: "Bordeaux, France", href: "https://www.google.com/maps/place/Bordeaux", color: "accent" },
];

const colorMap = {
  primary: { text: "text-primary", bg: "bg-primary/10" },
  secondary: { text: "text-secondary", bg: "bg-secondary/10" },
  accent: { text: "text-accent", bg: "bg-accent/10" },
};

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS n'est pas configure. Verifie tes variables d'environnement.");
      }
      await emailjs.send(serviceId, templateId, { name: formData.name, email: formData.email, message: formData.message }, publicKey);
      setSubmitStatus({ type: "success", message: "Message bien recu ! Je reviens vers vous au plus vite." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({ type: "error", message: error.text || error.message || "Une erreur s'est produite. Veuillez reessayer." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          tag="// 04 - Contact"
          title="Un projet ?"
          highlight="Ecrivons la suite ensemble."
          subtitle="Je suis a l'ecoute des opportunites et des idees folles. Le premier message est toujours le plus simple."
        />
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="border-gradient p-0.5 rounded-3xl">
            <div className="bg-background/80 backdrop-blur-xl rounded-[22px] p-8">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">Nom</label>
                  <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Votre nom" className="w-full px-4 py-3 bg-surface/50 rounded-xl border border-white/5 text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">Email</label>
                  <input type="email" id="email" required placeholder="votre@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-surface/50 rounded-xl border border-white/5 text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/30 outline-none" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">Message</label>
                  <textarea id="message" rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Parlez-moi de votre projet..." className="w-full px-4 py-3 bg-surface/50 rounded-xl border border-white/5 text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none resize-none" />
                </div>
                <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                  {isLoading ? (<><Loader2 className="w-5 h-5 animate-spin" />Envoi en cours...</>) : (<>Envoyer le message<Send className="w-5 h-5" /></>)}
                </Button>
                {submitStatus.type && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={"flex items-center gap-3 p-4 rounded-xl " + (submitStatus.type === "success" ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300" : "bg-red-500/10 border border-red-500/30 text-red-300")}>
                    {submitStatus.type === "success" ? <CheckCircle className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                    <p className="text-sm">{submitStatus.message}</p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-secondary mb-6">// infos</h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => {
                  const c = colorMap[item.color];
                  return (
                    <a href={item.href} key={i} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-center gap-4 p-3 -m-3 rounded-xl hover:bg-white/5 transition-colors">
                      <div className={"w-11 h-11 rounded-xl " + c.bg + " flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"}>
                        <item.icon className={"w-5 h-5 " + c.text} />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono">{item.label}</div>
                        <div className="font-medium text-foreground group-hover:text-white transition-colors">{item.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="glass rounded-2xl p-6 border border-secondary/20 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-secondary/20 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative block w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="font-display font-bold">Actuellement disponible</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Actuellement à la recherche d'un stage du 17 août au 6 novembre 2026. Je suis ouverte à toute opportunité de collaboration pour mettre mes compétences au service de vos projets !
                </p>
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">// temps de reponse</p>
              <p className="text-2xl font-display font-bold gradient-text-static">Sous 24h</p>
              <p className="text-xs text-muted-foreground mt-1">en semaine, un peu plus long le week-end</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
