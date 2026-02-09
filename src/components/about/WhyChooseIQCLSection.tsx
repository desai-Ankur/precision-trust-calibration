import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ShieldCheck, Users, Clock, HeadphonesIcon, Award, CheckCircle2 } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Certified Accuracy", description: "NABL accredited under ISO/IEC 17025:2017 with full measurement traceability." },
  { icon: Award, title: "Industry Trusted", description: "Preferred calibration partner for 500+ organizations across India." },
  { icon: Users, title: "Expert Metrologists", description: "Qualified team with decades of combined experience in precision metrology." },
  { icon: Clock, title: "Fast Turnaround", description: "Efficient workflows and digital systems for quick certificate delivery." },
  { icon: HeadphonesIcon, title: "Dedicated Support", description: "End-to-end calibration management with responsive after-sales support." },
  { icon: CheckCircle2, title: "7 Departments", description: "Comprehensive coverage across mechanical, electrical, thermal, pressure, and more." },
];

export const WhyChooseIQCLSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [rm, setRm] = useState(false);
  useEffect(() => { setRm(window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);

  return (
    <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div className="space-y-6"
            {...(rm ? {} : { initial: { opacity: 0, x: -30 }, animate: inView ? { opacity: 1, x: 0 } : {} })}
            transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-accent uppercase">
              <span className="w-8 h-px bg-accent" />Why IQCL
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Why Leading Industries <span className="text-gradient">Choose Us</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              When precision matters, industries turn to IQCL for certified accuracy, 
              comprehensive coverage, and reliable calibration services they can trust.
            </p>
          </motion.div>

          {/* Right - Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                className="group flex gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
                {...(rm ? {} : {
                  initial: { opacity: 0, y: 20 },
                  animate: inView ? { opacity: 1, y: 0 } : {},
                  whileHover: { y: -3, transition: { duration: 0.2 } },
                })}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <r.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-sm">{r.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{r.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
