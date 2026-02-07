import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Target, Microscope, FileCheck, Users, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Precision Focus",
    description: "Every calibration is performed with meticulous attention to accuracy and traceability.",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    icon: Microscope,
    title: "Advanced Equipment",
    description: "State-of-the-art reference standards and calibration equipment.",
    gradient: "from-accent/20 to-success/20",
  },
  {
    icon: FileCheck,
    title: "Comprehensive Reports",
    description: "Detailed calibration certificates with full measurement uncertainty analysis.",
    gradient: "from-success/20 to-primary/20",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Qualified metrologists with decades of combined experience.",
    gradient: "from-primary/20 to-success/20",
  },
];

// Animated counter hook
const useCounter = (end: number, duration: number = 2, isInView: boolean) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);
  
  return count;
};

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const yearsCount = useCounter(15, 2, isInView);
  const clientsCount = useCounter(500, 2.5, isInView);
  const instrumentsCount = useCounter(50, 2, isInView);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Left - Content */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -40 }}
            animate={isInView && !prefersReducedMotion ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span 
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-accent uppercase"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                animate={isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
              >
                <span className="w-8 h-px bg-accent" />
                About IQCL
              </motion.span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Trusted Calibration Partner for{" "}
                <span className="text-gradient">Indian Industries</span>
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Instrument Quality Calibration LLP (IQCL) is a premier calibration laboratory 
              headquartered in India. Accredited by NABL under ISO/IEC 17025:2017, we specialize 
              in providing precision calibration services across multiple disciplines including 
              mechanical, thermal, electro-technical, and more.
            </p>
            
            <p className="text-muted-foreground">
              Our commitment to quality, accuracy, and customer satisfaction has made us a 
              preferred calibration partner for leading organizations across manufacturing, 
              automotive, pharmaceutical, and engineering sectors.
            </p>

            {/* Animated Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 py-6 border-y border-border"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="text-center">
                <div className="font-display text-3xl lg:text-4xl font-bold text-primary">
                  {prefersReducedMotion ? 15 : yearsCount}+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="text-center border-x border-border">
                <div className="font-display text-3xl lg:text-4xl font-bold text-primary">
                  {prefersReducedMotion ? 500 : clientsCount}+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl lg:text-4xl font-bold text-primary">
                  {prefersReducedMotion ? 50 : instrumentsCount}K+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Calibrations</div>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary/80 rounded-full border border-border/50">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-medium">ISO/IEC 17025:2017</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary/80 rounded-full border border-border/50">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-medium">NABL Accredited</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Feature Cards */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 40 }}
            animate={isInView && !prefersReducedMotion ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={prefersReducedMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
