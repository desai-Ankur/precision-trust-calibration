import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Target, Clock, Users } from "lucide-react";

const stats = [
  { icon: Award, value: 15, suffix: "+", label: "Years Experience" },
  { icon: Target, value: 27, suffix: "+", label: "Instrument Types" },
  { icon: Clock, value: 99.5, suffix: "%", label: "Accuracy Rate" },
  { icon: Users, value: 500, suffix: "+", label: "Clients Served" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current * 10) / 10);
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}{suffix}
    </span>
  );
};

export const MechAboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-sm font-medium text-accent">About Our Service</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              World-Class Equipment for{" "}
              <span className="text-gradient">Unmatched Precision</span>
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Our mechanical calibration laboratory is equipped with calibration standards and 
              measurement equipment from globally renowned, high-accuracy brands including 
              <strong className="text-foreground"> FLUKE</strong> and 
              <strong className="text-foreground"> NAGMAN</strong>.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Every calibration we perform is traceable to national and international standards, 
              ensuring complete reliability and compliance with ISO/IEC 17025:2017 requirements. 
              Our commitment to accuracy, combined with state-of-the-art equipment, makes us the 
              trusted choice for precision mechanical calibration.
            </p>

            {/* Brand Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              {["FLUKE", "NAGMAN", "ISO 17025"].map((brand) => (
                <div
                  key={brand}
                  className="px-4 py-2 rounded-lg bg-secondary border border-border/50 text-sm font-semibold text-foreground"
                >
                  {brand}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="font-display text-3xl font-bold text-foreground mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
