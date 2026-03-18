import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, CheckCircle, Globe, Award } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "NABL Accredited", sub: "Lab Competence" },
  { icon: Award, label: "ISO 17025:2017", sub: "International Standard" },
  { icon: Globe, label: "Globally Traceable", sub: "NIST & NPL Traceable" },
  { icon: CheckCircle, label: "GST Registered", sub: "Govt. Verified Entity" },
];

export const CertificatesTrustBadge = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 lg:py-24 bg-secondary/30 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-accent uppercase mb-4">
            <span className="w-8 h-px bg-accent" />
            Verified & Trusted
            <span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Trusted by <span className="text-gradient">1 Lakh+</span> Clients
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground text-sm">{badge.label}</h3>
              <p className="text-xs text-muted-foreground mt-1">{badge.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
