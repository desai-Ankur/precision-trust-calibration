import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Microscope, FileCheck, Users } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Precision Focus",
    description: "Every calibration is performed with meticulous attention to accuracy and traceability.",
  },
  {
    icon: Microscope,
    title: "Advanced Equipment",
    description: "State-of-the-art reference standards and calibration equipment.",
  },
  {
    icon: FileCheck,
    title: "Comprehensive Reports",
    description: "Detailed calibration certificates with full measurement uncertainty analysis.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Qualified metrologists with decades of combined experience.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-sm font-semibold tracking-wider text-accent uppercase">
                About IQCL
              </span>
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

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="text-sm font-medium">ISO/IEC 17025:2017</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-medium">NABL Accredited</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
