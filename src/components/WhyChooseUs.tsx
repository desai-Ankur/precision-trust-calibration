import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Target, Clock, Users, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "NABL Accredited",
    description: "Our laboratory holds ISO/IEC 17025:2017 accreditation from NABL, ensuring internationally recognized quality standards.",
    highlight: "ISO 17025",
  },
  {
    icon: Target,
    title: "Unmatched Precision",
    description: "We utilize state-of-the-art reference standards and equipment to deliver measurements with the highest accuracy.",
    highlight: "99.5% Accuracy",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick calibration services with standard turnaround of 24-48 hours without compromising on quality.",
    highlight: "24-48 Hours",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team of qualified metrologists brings decades of experience across diverse calibration disciplines.",
    highlight: "15+ Years Exp",
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

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Reasons Grid */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold tracking-wider text-accent uppercase">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
                Your Trusted Partner in{" "}
                <span className="text-gradient">Quality Assurance</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group p-6 rounded-2xl border border-border bg-card hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <reason.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="px-2 py-1 text-xs font-semibold bg-success/10 text-success rounded-full">
                      {reason.highlight}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:sticky lg:top-32"
          >
            <div className="p-8 rounded-3xl bg-gradient-dark text-primary-foreground">
              <h3 className="font-display text-2xl font-bold mb-6">
                What You Get With IQCL
              </h3>
              <ul className="space-y-4">
                {checkpoints.map((point, index) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-primary-foreground/90">{point}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-primary-foreground/10">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-primary/30 border-2 border-primary-foreground/20 flex items-center justify-center"
                      >
                        <span className="text-xs font-semibold">★</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold">500+ Happy Clients</div>
                    <div className="text-sm text-primary-foreground/70">Across India</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
