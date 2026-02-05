import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Gauge, Activity, Thermometer, BarChart3, 
  CircleDot, Radio, Settings, AlertCircle,
  TrendingUp, TrendingDown, Waves, Scale
} from "lucide-react";

const services = [
  { name: "Pressure Gauge", icon: Gauge, description: "Analog & digital pressure gauge calibration" },
  { name: "Vacuum Gauge", icon: TrendingDown, description: "Vacuum measurement calibration services" },
  { name: "Pressure Transmitter", icon: Radio, description: "4-20mA & HART transmitter calibration" },
  { name: "Vacuum Transmitter", icon: Activity, description: "Vacuum transmitter calibration" },
  { name: "Magnehelic Gauge", icon: CircleDot, description: "Differential pressure gauge calibration" },
  { name: "Manometer", icon: Waves, description: "U-tube & inclined manometer calibration" },
  { name: "Safety Valve", icon: AlertCircle, description: "Pressure relief valve testing" },
  { name: "Level Gauge", icon: Scale, description: "Level measurement calibration" },
  { name: "Chart Recorder", icon: BarChart3, description: "Pressure recording device calibration" },
  { name: "Barometer", icon: TrendingUp, description: "Atmospheric pressure calibration" },
  { name: "Pressure Switch", icon: Settings, description: "Pressure switch setpoint calibration" },
  { name: "Differential Pressure Transmitter", icon: Activity, description: "DP transmitter calibration" },
  { name: "Pressure Calibrator", icon: Gauge, description: "Master calibrator verification" },
  { name: "Compound Gauge", icon: CircleDot, description: "Combined vacuum & pressure calibration" },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/50 hover:shadow-elevated transition-all duration-300"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
        <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
          {service.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

export const PressureServicesSection = () => {
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
            <Gauge className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Services</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pressure Instruments We{" "}
            <span className="text-gradient">Calibrate</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive calibration services for a wide range of pressure and vacuum 
            measurement instruments, ensuring precision and compliance with industry standards.
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
            <Gauge className="w-5 h-5" />
            <span>14+ Pressure Instruments Calibrated</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
