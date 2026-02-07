import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Zap, Activity, Gauge, Thermometer, Clock, 
  CircleDot, Radio, Battery, Timer, Waves,
  Settings, AlertCircle, BarChart3, Cpu
} from "lucide-react";
import { HorizontalScroll, ScrollCard } from "@/components/ui/horizontal-scroll";

const services = [
  { name: "Multimeter", icon: Gauge, description: "Digital & analog multimeter calibration with certified accuracy" },
  { name: "Clamp Meter", icon: CircleDot, description: "Current clamp calibration for safe electrical measurement" },
  { name: "Insulation Tester (Megger)", icon: AlertCircle, description: "High resistance measurement calibration services" },
  { name: "AC/DC Volt Meter", icon: Zap, description: "Voltage measurement calibration & verification" },
  { name: "AC/DC Ampere Meter", icon: Activity, description: "Current measurement calibration services" },
  { name: "Power Meter", icon: Battery, description: "Power measurement calibration & testing" },
  { name: "Resistance Meter", icon: Radio, description: "Precision resistance measurement calibration" },
  { name: "Capacitance Meter", icon: Cpu, description: "Capacitance measurement calibration services" },
  { name: "Frequency Meter", icon: Waves, description: "Frequency measurement calibration & testing" },
  { name: "Watt / Power Meter", icon: BarChart3, description: "Wattage & power calibration services" },
  { name: "Temperature Calibrator", icon: Thermometer, description: "Temperature source calibration & verification" },
  { name: "Time Totalizer", icon: Timer, description: "Time measurement calibration services" },
  { name: "Leakage Tester", icon: AlertCircle, description: "Leakage current calibration & testing" },
  { name: "LCR Meter", icon: Settings, description: "Inductance, capacitance, resistance calibration" },
  { name: "Stop Watch / Digital Timer", icon: Clock, description: "Time interval calibration services" },
  { name: "mV / mA Loop Calibrator", icon: Activity, description: "Process loop calibration & verification" },
  { name: "Multi-Function Calibrator", icon: Settings, description: "Multi-parameter calibration services" },
  { name: "Temperature Indicator", icon: Thermometer, description: "Temperature display calibration" },
  { name: "Earth Resistance Tester", icon: Radio, description: "Ground resistance calibration services" },
  { name: "Energy Meter", icon: Battery, description: "Energy consumption calibration" },
  { name: "Chart Recorder", icon: BarChart3, description: "Data recording device calibration" },
  { name: "Temperature Controller", icon: Thermometer, description: "Controller calibration & simulation" },
  { name: "Loop Power Calibrator", icon: Zap, description: "Loop-powered instrument calibration" },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const Icon = service.icon;
  
  return (
    <ScrollCard index={index}>
      <div className="group relative h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/50 hover:shadow-elevated transition-all duration-300">
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Icon Badge */}
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Icon className="w-7 h-7 text-primary-foreground" />
          </div>
          
          {/* Content */}
          <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-accent transition-colors duration-200">
            {service.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {service.description}
          </p>
          
          {/* Subtle Learn More Indicator */}
          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Learn more</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </div>
        </div>
      </div>
    </ScrollCard>
  );
};

export const ElectroServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Services</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Electrical Instruments We{" "}
            <span className="text-gradient">Calibrate</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive calibration services for a wide range of electrical and electronic 
            measuring instruments, ensuring precision and compliance with industry standards.
          </p>
          
          {/* Scroll Hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-4 text-sm text-muted-foreground/70 flex items-center justify-center gap-2"
          >
            <span>Swipe or drag to explore</span>
            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Horizontal Scroll Services */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <HorizontalScroll>
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </HorizontalScroll>
        </motion.div>

        {/* Total Count Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-elevated">
            <Zap className="w-5 h-5" />
            <span>23+ Electrical Instruments Calibrated</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
