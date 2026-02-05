import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Zap, Activity, Gauge, Thermometer, Clock, 
  CircleDot, Radio, Battery, Timer, Waves,
  Settings, AlertCircle, BarChart3, Cpu
} from "lucide-react";

const services = [
  { name: "Multimeter", icon: Gauge, description: "Digital & analog multimeter calibration" },
  { name: "Clamp Meter", icon: CircleDot, description: "Current clamp calibration services" },
  { name: "Insulation Tester (Megger)", icon: AlertCircle, description: "High resistance measurement calibration" },
  { name: "AC/DC Volt Meter", icon: Zap, description: "Voltage measurement calibration" },
  { name: "AC/DC Ampere Meter", icon: Activity, description: "Current measurement calibration" },
  { name: "Power Meter", icon: Battery, description: "Power measurement calibration" },
  { name: "Resistance Meter", icon: Radio, description: "Resistance measurement calibration" },
  { name: "Capacitance Meter", icon: Cpu, description: "Capacitance measurement calibration" },
  { name: "Frequency Meter", icon: Waves, description: "Frequency measurement calibration" },
  { name: "Watt / Power Meter", icon: BarChart3, description: "Wattage & power calibration" },
  { name: "Temperature Calibrator", icon: Thermometer, description: "Temperature source calibration" },
  { name: "Time Totalizer", icon: Timer, description: "Time measurement calibration" },
  { name: "Leakage Tester", icon: AlertCircle, description: "Leakage current calibration" },
  { name: "LCR Meter", icon: Settings, description: "Inductance, capacitance, resistance calibration" },
  { name: "Stop Watch / Digital Timer", icon: Clock, description: "Time interval calibration" },
  { name: "mV / mA Loop Calibrator", icon: Activity, description: "Process loop calibration" },
  { name: "Multi-Function Calibrator", icon: Settings, description: "Multi-parameter calibration" },
  { name: "Temperature Indicator", icon: Thermometer, description: "Temperature display calibration" },
  { name: "Earth Resistance Tester", icon: Radio, description: "Ground resistance calibration" },
  { name: "Energy Meter", icon: Battery, description: "Energy consumption calibration" },
  { name: "Chart Recorder", icon: BarChart3, description: "Data recording calibration" },
  { name: "Temperature Controller / Simulation", icon: Thermometer, description: "Controller calibration & simulation" },
  { name: "Loop Power Calibrator", icon: Zap, description: "Loop-powered instrument calibration" },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="group relative p-5 rounded-2xl bg-card border border-border/50 hover:border-accent/50 hover:shadow-elevated transition-all duration-300"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
          {service.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
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
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
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
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Total Count Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
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
