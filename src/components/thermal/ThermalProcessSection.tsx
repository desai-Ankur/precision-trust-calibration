import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardCheck, Settings, BarChart3, FileCheck, Send } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, title: "Instrument Receipt & Inspection", description: "Each instrument is logged, inspected for damage, and assessed for calibration readiness." },
  { icon: Settings, title: "Standard Selection & Setup", description: "Appropriate reference standards are selected and the calibration environment is controlled." },
  { icon: BarChart3, title: "Calibration & Measurement", description: "Multi-point calibration is performed across the required temperature range with traceable standards." },
  { icon: FileCheck, title: "Data Analysis & Certification", description: "Results are analyzed against tolerances and a detailed calibration certificate is generated." },
  { icon: Send, title: "Delivery & Support", description: "Calibrated instruments are returned with certificates and ongoing technical support." },
];

export const ThermalProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <Settings className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Our Process</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Calibration{" "}
            <span className="text-gradient">Workflow</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A systematic, quality-controlled process ensuring every temperature instrument meets exact specifications.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-border origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="relative flex gap-6 items-start"
                >
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center shadow-lg flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="pt-2">
                    <div className="text-xs font-medium text-destructive mb-1">Step {index + 1}</div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
