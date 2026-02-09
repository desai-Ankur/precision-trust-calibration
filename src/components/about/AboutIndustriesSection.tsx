import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Factory, Pill, Car, Plane, FlaskConical, Cpu, Building2, Cog } from "lucide-react";

const industries = [
  { icon: Factory, name: "Manufacturing", description: "Precision instruments for production lines and quality control." },
  { icon: Pill, name: "Pharmaceuticals", description: "Validated calibrations for GMP-compliant lab instruments." },
  { icon: Car, name: "Automotive", description: "Calibration for inspection gauges and testing equipment." },
  { icon: Plane, name: "Aerospace", description: "High-accuracy calibration meeting aerospace standards." },
  { icon: FlaskConical, name: "Laboratories", description: "Complete lab instrument calibration and validation." },
  { icon: Cpu, name: "Electronics", description: "Electrical measurement and testing instrument calibration." },
  { icon: Building2, name: "Construction", description: "Surveying, dimensional, and environmental instruments." },
  { icon: Cog, name: "Engineering", description: "Precision tooling and measurement instrument services." },
];

export const AboutIndustriesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [rm, setRm] = useState(false);
  useEffect(() => { setRm(window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          {...(rm ? {} : { initial: { opacity: 0, y: 20 }, animate: inView ? { opacity: 1, y: 0 } : {} })}
          transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-accent uppercase">
            <span className="w-8 h-px bg-accent" />Industries<span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              className="group glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 cursor-default"
              {...(rm ? {} : {
                initial: { opacity: 0, scale: 0.9 },
                animate: inView ? { opacity: 1, scale: 1 } : {},
                whileHover: { y: -4, transition: { duration: 0.2 } },
              })}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <ind.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{ind.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{ind.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
