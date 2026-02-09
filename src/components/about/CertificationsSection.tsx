import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";

const certs = [
  "ISO/IEC 17025:2017",
  "NABL Accredited",
  "ISO 9001:2015",
  "NIST Traceable",
  "BIS Certified",
  "GMP Compliant",
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [rm, setRm] = useState(false);
  useEffect(() => { setRm(window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);

  return (
    <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="text-center max-w-2xl mx-auto mb-12 space-y-4"
          {...(rm ? {} : { initial: { opacity: 0, y: 20 }, animate: inView ? { opacity: 1, y: 0 } : {} })}
          transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-accent uppercase">
            <span className="w-8 h-px bg-accent" />Certifications<span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Quality <span className="text-gradient">Standards</span>
          </h2>
        </motion.div>

        {/* Logo carousel */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
          
          <div className={`flex gap-8 ${rm ? "flex-wrap justify-center" : "animate-scroll"}`}
            style={rm ? {} : { width: "max-content" }}>
            {[...certs, ...certs].map((cert, i) => (
              <div
                key={`${cert}-${i}`}
                className="flex items-center gap-3 px-8 py-5 glass-card rounded-2xl flex-shrink-0 hover:border-primary/30 transition-colors"
              >
                <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-display font-semibold text-foreground whitespace-nowrap">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
