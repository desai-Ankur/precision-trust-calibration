import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  Award, 
  Shield, 
  Target, 
  Clock, 
  Users, 
  Microscope,
  CheckCircle2,
  TrendingUp
} from "lucide-react";

const useCounter = (end: number, duration: number = 2000, isInView: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return count;
};

const features = [
  {
    icon: Award,
    title: "NABL Accredited",
    description: "Nationally recognized calibration laboratory with ISO/IEC 17025:2017 certification",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Ultra-High Accuracy",
    description: "Precision standards with traceability to national and international measurement systems",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Microscope,
    title: "Advanced Equipment",
    description: "State-of-the-art calibration instruments from industry-leading manufacturers",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Express calibration services with typical 24-48 hour turnaround time",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly trained metrologists with decades of combined industry experience",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous quality control processes ensuring consistent, reliable results",
    color: "from-indigo-500 to-blue-500",
  },
];

const stats = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 50000, suffix: "+", label: "Calibrations Completed" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 150, suffix: "+", label: "Instrument Types" },
];

export const WhyIQCLSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-iqcl" className="py-24 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Why Choose IQCL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders{" "}
            <span className="text-gradient">Worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine cutting-edge technology with decades of expertise to deliver 
            calibration services that exceed international standards.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const count = useCounter(stat.value, 2000, isInView);
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <div className="relative bg-card border border-border/50 rounded-2xl p-6 text-center hover:border-primary/30 transition-colors duration-300">
                  <div className="font-display text-4xl sm:text-5xl font-bold text-gradient mb-2">
                    {count.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Checkmark */}
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Excellence</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
