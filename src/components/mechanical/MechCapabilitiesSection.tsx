import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Ruler, Gauge, Square, Circle, Triangle, Hexagon } from "lucide-react";

const capabilities = [
  {
    icon: Ruler,
    title: "Dimensional Calibration",
    description: "Precision measurement of length, width, depth, and thickness with micrometer-level accuracy.",
    color: "from-primary to-primary/70",
  },
  {
    icon: Gauge,
    title: "Pressure & Force",
    description: "Calibration of pressure gauges, load cells, and force measurement instruments.",
    color: "from-accent to-accent/70",
  },
  {
    icon: Circle,
    title: "Angular Measurement",
    description: "Precise calibration of protractors, angle plates, and bevel instruments.",
    color: "from-success to-success/70",
  },
  {
    icon: Square,
    title: "Flatness & Surface",
    description: "Surface plate verification and flatness measurement using precision standards.",
    color: "from-primary to-accent",
  },
  {
    icon: Triangle,
    title: "Hardness Testing",
    description: "Calibration of Shore hardness testers and material testing equipment.",
    color: "from-accent to-success",
  },
  {
    icon: Hexagon,
    title: "Thread & Gauge",
    description: "Thread gauge, plug gauge, and snap gauge calibration services.",
    color: "from-success to-primary",
  },
];

export const MechCapabilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Our Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Comprehensive Mechanical{" "}
            <span className="text-gradient">Calibration Coverage</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our laboratory covers multiple measurement disciplines with specialized focus on 
            mechanical calibration, ensuring wide measurement capability across diverse parameters.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${capability.color} mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <capability.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
