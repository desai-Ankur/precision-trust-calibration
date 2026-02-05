import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Target, Users, Clock, MapPin, 
  Shield, Gauge, CheckCircle2 
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "High Accuracy Standards",
    description: "Calibration accuracy up to ±0.01% of full scale using premium reference standards."
  },
  {
    icon: Users,
    title: "Experienced Technicians",
    description: "Our team has 15+ years of expertise in pressure and vacuum calibration."
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Most calibrations completed within 24-48 hours with express options available."
  },
  {
    icon: MapPin,
    title: "On-Site Calibration",
    description: "We bring our mobile lab to your facility for minimal production downtime."
  },
  {
    icon: Shield,
    title: "Trusted Equipment",
    description: "We use FLUKE, NAGMAN, and DRUCK calibrators with full traceability."
  },
  {
    icon: Gauge,
    title: "Wide Pressure Range",
    description: "From high vacuum to 700 bar, we cover all industrial pressure requirements."
  }
];

export const PressureWhyChooseSection = () => {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20 mb-6">
            <CheckCircle2 className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">Why Choose IQCL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Your Trusted Partner for{" "}
            <span className="text-gradient">Pressure Calibration</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine precision, expertise, and reliability to deliver calibration 
            services that meet the highest industry standards.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-8 h-full hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-accent/30">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
