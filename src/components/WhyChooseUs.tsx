import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Target, Clock, Users, CheckCircle2, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "NABL Accredited",
    description: "Our laboratory holds ISO/IEC 17025:2017 accreditation from NABL, ensuring internationally recognized quality standards.",
    highlight: "ISO 17025",
    color: "primary",
  },
  {
    icon: Target,
    title: "Unmatched Precision",
    description: "We utilize state-of-the-art reference standards and equipment to deliver measurements with the highest accuracy.",
    highlight: "99.5% Accuracy",
    color: "accent",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick calibration services with standard turnaround of 24-48 hours without compromising on quality.",
    highlight: "24-48 Hours",
    color: "success",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team of qualified metrologists brings decades of experience across diverse calibration disciplines.",
    highlight: "15+ Years Exp",
    color: "primary",
  },
];

const checkpoints = [
  "Traceable to National/International Standards",
  "Comprehensive Measurement Uncertainty",
  "Detailed Calibration Certificates",
  "Post-Calibration Support",
  "Regular Follow-up & Reminders",
  "Competitive Pricing",
];

export const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const getHighlightColor = (color: string) => {
    switch (color) {
      case "accent":
        return "bg-accent/10 text-accent";
      case "success":
        return "bg-success/10 text-success";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Reasons Grid */}
          <div className="space-y-8">
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-accent uppercase mb-4"
                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                animate={isInView && !prefersReducedMotion ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="w-8 h-px bg-accent" />
                Why Choose Us
              </motion.span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
                Your Trusted Partner in{" "}
                <span className="text-gradient">Quality Assurance</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={prefersReducedMotion ? {} : { y: -4, scale: 1.02 }}
                  className="group p-6 rounded-2xl border border-border bg-card hover:bg-secondary/50 hover:border-primary/20 hover:shadow-card transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <reason.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getHighlightColor(reason.color)}`}>
                      {reason.highlight}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Checklist */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 40 }}
            animate={isInView && !prefersReducedMotion ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:sticky lg:top-32"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-dark text-primary-foreground overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">
                    What You Get With IQCL
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  {checkpoints.map((point, index) => (
                    <motion.li
                      key={point}
                      initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                      animate={isInView && !prefersReducedMotion ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.08 }}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 group-hover:bg-success/30 group-hover:scale-110 transition-all">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                      </div>
                      <span className="text-primary-foreground/90 group-hover:text-primary-foreground transition-colors">{point}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div 
                  className="mt-8 pt-6 border-t border-primary-foreground/10"
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {["R", "P", "A", "S"].map((initial, i) => (
                        <motion.div
                          key={i}
                          className="w-10 h-10 rounded-full bg-gradient-primary border-2 border-primary-foreground/20 flex items-center justify-center shadow-soft"
                          initial={prefersReducedMotion ? {} : { scale: 0 }}
                          animate={isInView && !prefersReducedMotion ? { scale: 1 } : {}}
                          transition={{ delay: 1.3 + i * 0.1, type: "spring", stiffness: 300 }}
                        >
                          <span className="text-xs font-semibold">{initial}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div>
                      <div className="font-semibold">500+ Happy Clients</div>
                      <div className="text-sm text-primary-foreground/70">Across India</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
