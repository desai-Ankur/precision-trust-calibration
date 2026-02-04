import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Clock, Truck, Award } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "High Accuracy Standards",
    description: "State-of-the-art equipment from FLUKE and NAGMAN ensuring measurement precision that exceeds industry requirements.",
  },
  {
    icon: Users,
    title: "Experienced Technicians",
    description: "Our team of qualified professionals brings 15+ years of expertise in mechanical calibration and metrology.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround Time",
    description: "Efficient processes and dedicated resources ensure your instruments are calibrated and returned within 24-48 hours.",
  },
  {
    icon: Truck,
    title: "On-Site Calibration Facility",
    description: "Minimize downtime with our mobile calibration services. We bring the laboratory to your doorstep.",
  },
  {
    icon: Award,
    title: "Trusted Equipment Brands",
    description: "We use only certified reference standards and calibration equipment from globally recognized manufacturers.",
  },
];

export const MechWhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Why Choose IQCL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The Trusted Choice for{" "}
            <span className="text-gradient">Precision Calibration</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Industry leaders trust IQCL for mechanical calibration services that deliver 
            accuracy, reliability, and compliance with international standards.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={cn(
                "group relative",
                index === 4 && "md:col-span-2 lg:col-span-1 lg:col-start-2"
              )}
            >
              <div className="h-full glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <reason.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
