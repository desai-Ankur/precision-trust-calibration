import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Wrench, Zap, Gauge, Wind, Thermometer, FlaskConical, Scale } from "lucide-react";

const capabilities = [
  { icon: Wrench, title: "Mechanical Calibration", description: "Calipers, micrometers, gauges, and dimensional instruments with traceable accuracy.", progress: 95 },
  { icon: Zap, title: "Electro-Technical", description: "Multimeters, clamp meters, insulation testers, and precision electrical instruments.", progress: 92 },
  { icon: Gauge, title: "Pressure Systems", description: "Pressure gauges, transmitters, safety valves, and differential pressure instruments.", progress: 90 },
  { icon: Wind, title: "Fluid Flow", description: "Flow meters, anemometers, dust samplers, and velocity measurement instruments.", progress: 88 },
  { icon: Thermometer, title: "Thermal Calibration", description: "RTD sensors, thermocouples, environmental chambers, and temperature baths.", progress: 93 },
  { icon: FlaskConical, title: "Lab Instruments", description: "pH meters, conductivity meters, centrifuges, muffle furnaces, and analytical equipment.", progress: 87 },
  { icon: Scale, title: "Mass & Volume", description: "Weighing balances, standard weights, micropipettes, and volumetric glassware.", progress: 91 },
];

export const ExpertiseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [rm, setRm] = useState(false);
  useEffect(() => { setRm(window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);

  return (
    <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          {...(rm ? {} : { initial: { opacity: 0, y: 20 }, animate: inView ? { opacity: 1, y: 0 } : {} })}
          transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-accent uppercase">
            <span className="w-8 h-px bg-accent" />Expertise<span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-muted-foreground">7 specialized departments delivering precision across every discipline.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              className="group glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              {...(rm ? {} : {
                initial: { opacity: 0, y: 20 },
                animate: inView ? { opacity: 1, y: 0 } : {},
                whileHover: { y: -4, transition: { duration: 0.2 } },
              })}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <c.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.description}</p>
              {/* Progress bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Proficiency</span>
                  <span>{c.progress}%</span>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-primary rounded-full"
                    {...(rm ? { style: { width: `${c.progress}%` } } : {
                      initial: { width: 0 },
                      animate: inView ? { width: `${c.progress}%` } : {},
                    })}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
