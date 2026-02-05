import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Zap, Shield, CheckCircle } from "lucide-react";

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const ElectroAboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "High-precision electrical calibration standards",
    "Traceable to national/international standards",
    "Equipment from trusted brands like FLUKE & Yokogawa",
    "ISO 17025 compliant procedures",
  ];

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Our Electro-Tech Services</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Industry-Leading Electrical{" "}
              <span className="text-gradient">Calibration Excellence</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our Electro-Tech department specializes in the calibration and testing of a wide range 
              of electrical and electronic measuring instruments. Using state-of-the-art equipment 
              from industry leaders like FLUKE and Yokogawa, we deliver precise, traceable 
              calibration services that meet the highest industry standards.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              { icon: Zap, value: 23, suffix: "+", label: "Instrument Types", color: "accent" },
              { icon: Award, value: 15, suffix: "+", label: "Years Experience", color: "primary" },
              { icon: Shield, value: 99.9, suffix: "%", label: "Accuracy Rate", color: "success" },
              { icon: CheckCircle, value: 5000, suffix: "+", label: "Instruments Calibrated", color: "accent" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-${stat.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                </div>
                <div className="font-display text-3xl font-bold text-foreground mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
