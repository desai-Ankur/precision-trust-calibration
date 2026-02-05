import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Users, Zap, Shield, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "NABL Accredited",
    description: "ISO 17025 accredited laboratory ensuring international standards compliance",
  },
  {
    icon: Zap,
    title: "Precision Equipment",
    description: "State-of-the-art calibration standards from FLUKE, Yokogawa & other trusted brands",
  },
  {
    icon: Users,
    title: "Expert Technicians",
    description: "Highly trained and certified calibration professionals with years of experience",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast calibration services with flexible scheduling to minimize your downtime",
  },
  {
    icon: Shield,
    title: "Full Traceability",
    description: "Complete measurement traceability to national and international standards",
  },
  {
    icon: Wrench,
    title: "On-Site Services",
    description: "Convenient on-site calibration available for your facility needs",
  },
];

export const ElectroWhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Why Choose IQCL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Your Trusted Partner for{" "}
            <span className="text-gradient">Electrical Calibration</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine technical expertise with industry-leading equipment to deliver 
            calibration services you can rely on.
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
              <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/50 hover:shadow-elevated transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
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
