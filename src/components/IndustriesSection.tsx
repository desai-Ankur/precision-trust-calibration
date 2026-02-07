import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  Factory, 
  Cog, 
  Car, 
  Pill, 
  Building2, 
  Atom,
  Droplets,
  Zap
} from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Precision tools, gauges, and production equipment calibration",
    gradient: "from-primary/10 to-accent/10",
  },
  {
    icon: Cog,
    name: "Engineering",
    description: "Measurement instruments for design and quality control",
    gradient: "from-accent/10 to-success/10",
  },
  {
    icon: Car,
    name: "Automotive",
    description: "Testing and measuring equipment for automotive industry",
    gradient: "from-success/10 to-primary/10",
  },
  {
    icon: Pill,
    name: "Pharmaceuticals",
    description: "GMP-compliant calibration for pharma and healthcare",
    gradient: "from-primary/10 to-success/10",
  },
  {
    icon: Building2,
    name: "Construction",
    description: "Surveying and measuring instruments calibration",
    gradient: "from-accent/10 to-primary/10",
  },
  {
    icon: Atom,
    name: "Research Labs",
    description: "High-precision calibration for R&D laboratories",
    gradient: "from-success/10 to-accent/10",
  },
  {
    icon: Droplets,
    name: "Oil & Gas",
    description: "Pressure, flow, and temperature instruments",
    gradient: "from-primary/10 to-accent/10",
  },
  {
    icon: Zap,
    name: "Power & Energy",
    description: "Electrical and safety equipment calibration",
    gradient: "from-accent/10 to-success/10",
  },
];

export const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  return (
    <section id="industries" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-accent uppercase mb-4"
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
            animate={isInView && !prefersReducedMotion ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="w-8 h-px bg-accent" />
            Industries Served
            <span className="w-8 h-px bg-accent" />
          </motion.span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Calibration for Every Sector
          </h2>
          <p className="text-lg text-muted-foreground">
            We serve a diverse range of industries, understanding the unique calibration 
            requirements and compliance standards of each sector.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
              animate={isInView && !prefersReducedMotion ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              whileHover={prefersReducedMotion ? {} : { y: -8, scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 text-center overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
                  whileHover={prefersReducedMotion ? {} : { rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <industry.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {industry.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
