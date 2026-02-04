import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Factory, 
  Cog, 
  Beaker, 
  Gauge, 
  Thermometer, 
  Zap,
  Atom,
  Scale,
  Settings,
  CheckCircle2,
  Building2,
  Pill,
  Plane,
  Fuel,
  Car,
  Wrench
} from "lucide-react";

// Sample client/integration data - replace with actual client logos
const clients = [
  { name: "Tata Steel", industry: "Manufacturing", icon: Factory },
  { name: "L&T", industry: "Engineering", icon: Wrench },
  { name: "Mahindra", industry: "Automotive", icon: Car },
  { name: "Dr. Reddy's", industry: "Pharmaceuticals", icon: Pill },
  { name: "BHEL", industry: "Power & Energy", icon: Zap },
  { name: "IOCL", industry: "Oil & Gas", icon: Fuel },
  { name: "HAL", industry: "Aerospace", icon: Plane },
  { name: "Cipla", industry: "Pharmaceuticals", icon: Beaker },
  { name: "Reliance", industry: "Conglomerate", icon: Building2 },
  { name: "Adani", industry: "Infrastructure", icon: Factory },
  { name: "JSW Steel", industry: "Manufacturing", icon: Cog },
  { name: "Glenmark", industry: "Pharmaceuticals", icon: Pill },
];

const integrationFeatures = [
  { icon: Gauge, label: "Pressure Instruments" },
  { icon: Thermometer, label: "Temperature Devices" },
  { icon: Scale, label: "Weighing Systems" },
  { icon: Zap, label: "Electrical Equipment" },
  { icon: Beaker, label: "Lab Instruments" },
  { icon: Cog, label: "Mechanical Gauges" },
];

// Logo Carousel Item
const LogoCard = ({ client }: { client: typeof clients[0] }) => {
  const Icon = client.icon;
  return (
    <div className="flex-shrink-0 w-48 mx-4 group">
      <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft">
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-xl bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
            <Icon className="w-7 h-7 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
          </div>
          <div className="text-center">
            <h3 className="font-display font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
              {client.name}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {client.industry}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Floating icon component for decorative elements
const FloatingIcon = ({ 
  icon: Icon, 
  className, 
  delay = 0,
  duration = 6
}: { 
  icon: React.ElementType; 
  className: string; 
  delay?: number;
  duration?: number;
}) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.1, 1],
      rotate: [0, 360],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <div className="w-12 h-12 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
      <Icon className="w-6 h-6 text-primary/60" />
    </div>
  </motion.div>
);

export const ClientsIntegrationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate clients for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-24 lg:py-32 relative overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/3 to-transparent rounded-full" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating Decorative Icons */}
      <FloatingIcon icon={Gauge} className="top-20 left-[15%] hidden lg:flex" delay={0} duration={8} />
      <FloatingIcon icon={Thermometer} className="top-40 right-[10%] hidden lg:flex" delay={1} duration={10} />
      <FloatingIcon icon={Atom} className="bottom-32 left-[8%] hidden lg:flex" delay={2} duration={7} />
      <FloatingIcon icon={Settings} className="bottom-20 right-[20%] hidden lg:flex" delay={1.5} duration={9} />
      <FloatingIcon icon={Beaker} className="top-1/3 right-[5%] hidden xl:flex" delay={0.5} duration={11} />
      <FloatingIcon icon={Scale} className="bottom-1/3 left-[5%] hidden xl:flex" delay={2.5} duration={8} />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-accent uppercase mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="w-8 h-px bg-accent" />
            Trusted Partners
            <span className="w-8 h-px bg-accent" />
          </motion.span>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Serving Industry{" "}
            <span className="text-gradient">Leaders</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Trusted by leading organizations across India for precision calibration 
            services. We integrate seamlessly with your quality management systems.
          </p>
        </motion.div>

        {/* Integration Features Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {integrationFeatures.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-border hover:border-primary/40 hover:shadow-soft transition-all duration-300 cursor-default"
            >
              <feature.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-foreground">{feature.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite Logo Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mb-16"
        >
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Carousel container */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll hover:pause-animation">
              {duplicatedClients.map((client, index) => (
                <LogoCard key={`${client.name}-${index}`} client={client} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats/Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative"
        >
          <div className="glass-card rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { value: "500+", label: "Clients Served", icon: CheckCircle2 },
                { value: "15+", label: "Years Experience", icon: Settings },
                { value: "50K+", label: "Instruments Calibrated", icon: Gauge },
                { value: "99.9%", label: "Accuracy Rate", icon: Atom },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="text-center group"
                >
                  <motion.div 
                    className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <stat.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                  <div className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
