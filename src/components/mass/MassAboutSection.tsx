import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Scale, Shield, CheckCircle, Beaker, Target } from "lucide-react";

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

export const MassAboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Analytical & precision weighing balance calibration",
    "Standard weights & weight box verification (E2/F1/F2/M1)",
    "Volumetric glassware calibration — burette, pipette, flask",
    "Micropipette accuracy & repeatability testing",
    "Traceable to national & international mass standards",
  ];

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Scale className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Mass & Weighing</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Precision Mass &{" "}
              <span className="text-gradient">Volumetric Calibration</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our Mass & Weighing Department delivers high-accuracy calibration of weighing balances,
              standard weights, and volumetric glassware used across pharmaceutical, chemical,
              research, and industrial laboratories. Every calibration is performed in a
              controlled environment with traceable reference standards.
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              { icon: Scale, value: 12, suffix: "+", label: "Instrument Types", color: "text-primary" },
              { icon: Award, value: 40, suffix: "+", label: "Years Experience", color: "text-accent" },
              { icon: Target, value: 99, suffix: ".9%", label: "Accuracy Rate", color: "text-primary" },
              { icon: Beaker, value: 5000, suffix: "+", label: "Instruments Calibrated", color: "text-accent" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
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
