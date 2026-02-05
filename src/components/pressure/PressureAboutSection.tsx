import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Shield, Award, Target, Gauge } from "lucide-react";

const AnimatedCounter = ({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { icon: Shield, value: 15, suffix: "+", label: "Years Experience" },
  { icon: Award, value: 14, suffix: "+", label: "Instrument Types" },
  { icon: Target, value: 99.9, suffix: "%", label: "Accuracy Rate" },
  { icon: Gauge, value: 700, suffix: " bar", label: "Max Pressure Range" },
];

export const PressureAboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Gauge className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Pressure Calibration</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Premium Standards for{" "}
              <span className="text-gradient">Pressure Measurement</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our Pressure Department utilizes calibration standards from industry-leading 
              manufacturers including <strong className="text-foreground">FLUKE</strong>, 
              <strong className="text-foreground"> NAGMAN</strong>, and 
              <strong className="text-foreground"> DRUCK</strong>. Every calibration is 
              traceable to national and international standards.
            </p>
            
            <ul className="space-y-3">
              {[
                "Vacuum to high-pressure calibration (up to 700 bar)",
                "Traceable to NABL/NPL standards",
                "Certified calibration reports with uncertainty analysis",
                "Both hydraulic and pneumatic pressure calibration"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Content - Stats Grid */}
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
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="font-display text-3xl font-bold text-foreground mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
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
