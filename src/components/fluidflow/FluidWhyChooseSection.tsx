import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Users, Headphones, Clock, Target, CheckCircle, Zap } from "lucide-react";

const reasons = [
  { icon: Award, title: "NABL Accredited Lab", description: "ISO/IEC 17025:2017 accredited laboratory with full traceability to national standards." },
  { icon: Target, title: "High-Accuracy Standards", description: "Calibration performed using certified reference standards for maximum measurement precision." },
  { icon: Users, title: "Expert Metrologists", description: "Skilled calibration engineers with deep expertise in fluid flow instrumentation." },
  { icon: Clock, title: "Fast Turnaround", description: "Efficient calibration workflows to minimize your instrument downtime." },
  { icon: Shield, title: "Industry Compliance", description: "Full compliance with environmental, safety, and quality regulations." },
  { icon: Headphones, title: "Dedicated Support", description: "Ongoing technical support and consultation for all your flow calibration needs." },
];

export const FluidWhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Why Choose Us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why IQCL for{" "}
            <span className="text-gradient">Flow Calibration</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Industry-leading accuracy, certified processes, and expert support for all your
            fluid flow calibration requirements.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              className="group p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elevated hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
