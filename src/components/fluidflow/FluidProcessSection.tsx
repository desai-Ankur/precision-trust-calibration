import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Settings, BarChart3, FileCheck, Truck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Instrument Receipt & Inspection",
    description: "We receive your flow instruments, log them, and conduct a thorough initial assessment of their condition and specifications.",
  },
  {
    icon: Settings,
    title: "Calibration Setup",
    description: "Our technicians configure the reference standards and calibration setup tailored to your specific flow instrument type and range.",
  },
  {
    icon: BarChart3,
    title: "Precision Calibration",
    description: "We perform multi-point calibration under controlled conditions using NABL-traceable reference standards and certified equipment.",
  },
  {
    icon: FileCheck,
    title: "Certification & Reporting",
    description: "Detailed calibration certificates with measurement data, uncertainty analysis, and traceability information are generated.",
  },
  {
    icon: Truck,
    title: "Dispatch & Support",
    description: "Calibrated instruments are safely dispatched with documentation. Our team remains available for follow-up support.",
  },
];

export const FluidProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Settings className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Process</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How We{" "}
            <span className="text-gradient">Calibrate</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A systematic, quality-driven process ensuring every flow instrument
            meets the highest accuracy and compliance standards.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated connecting line */}
          <motion.div
            className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-row`}
              >
                {/* Content Card */}
                <div className={`flex-1 hidden lg:block ${isLeft ? "text-right" : "text-left"}`}>
                  <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 group">
                    <step.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform inline-block" />
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-elevated"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="text-primary-foreground font-display font-bold text-lg">{index + 1}</span>
                  </motion.div>
                </div>

                {/* Mobile + other side spacer */}
                <div className="flex-1">
                  <div className="lg:hidden p-6 rounded-2xl bg-card border border-border/50 shadow-card">
                    <step.icon className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                  <div className="hidden lg:block" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
