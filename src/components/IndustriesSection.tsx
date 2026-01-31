import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
  },
  {
    icon: Cog,
    name: "Engineering",
    description: "Measurement instruments for design and quality control",
  },
  {
    icon: Car,
    name: "Automotive",
    description: "Testing and measuring equipment for automotive industry",
  },
  {
    icon: Pill,
    name: "Pharmaceuticals",
    description: "GMP-compliant calibration for pharma and healthcare",
  },
  {
    icon: Building2,
    name: "Construction",
    description: "Surveying and measuring instruments calibration",
  },
  {
    icon: Atom,
    name: "Research Labs",
    description: "High-precision calibration for R&D laboratories",
  },
  {
    icon: Droplets,
    name: "Oil & Gas",
    description: "Pressure, flow, and temperature instruments",
  },
  {
    icon: Zap,
    name: "Power & Energy",
    description: "Electrical and safety equipment calibration",
  },
];

export const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-accent uppercase">
            Industries Served
          </span>
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <industry.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {industry.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
