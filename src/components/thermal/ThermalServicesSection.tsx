import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Thermometer, Gauge, Snowflake, BarChart3, Settings,
  Activity, Radio, Timer, Flame, CloudSnow, Wind, MonitorSpeaker
} from "lucide-react";
import { HorizontalScroll, ScrollCard } from "@/components/ui/horizontal-scroll";

const instruments = [
  { name: "RTD Sensor", icon: Thermometer, description: "Resistance temperature detector calibration for precision measurement" },
  { name: "Thermocouple Sensor", icon: Activity, description: "Thermocouple sensor calibration across wide temperature ranges" },
  { name: "RTD with Indicator", icon: MonitorSpeaker, description: "Complete RTD and indicator assembly calibration service" },
  { name: "Thermocouple with Indicator", icon: Radio, description: "Thermocouple sensor with display unit calibration" },
  { name: "Temperature Gauge", icon: Gauge, description: "Analog and digital temperature gauge calibration" },
  { name: "Freezer", icon: Snowflake, description: "Freezer temperature uniformity and accuracy calibration" },
  { name: "Digital Thermometer", icon: Thermometer, description: "Digital thermometer verification and calibration" },
  { name: "Chart Recorder", icon: BarChart3, description: "Temperature chart recorder calibration and validation" },
  { name: "Thermohygro Meter", icon: Wind, description: "Temperature and humidity meter combined calibration" },
  { name: "Temperature Validation", icon: Settings, description: "Full temperature validation studies for equipment qualification" },
  { name: "Temperature Gun", icon: Flame, description: "Infrared non-contact temperature gun calibration" },
  { name: "Environment Chamber", icon: CloudSnow, description: "Environmental test chamber mapping and calibration" },
  { name: "Temperature Bath", icon: Timer, description: "Precision temperature bath calibration and uniformity testing" },
  { name: "Cold Chamber", icon: Snowflake, description: "Cold storage chamber temperature mapping and calibration" },
];

const ServiceCard = ({ service, index }: { service: typeof instruments[0]; index: number }) => {
  const Icon = service.icon;

  return (
    <ScrollCard index={index}>
      <div className="group relative h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-destructive/40 hover:shadow-elevated transition-all duration-300">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-destructive/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Icon className="w-7 h-7 text-primary-foreground" />
          </div>

          <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-destructive transition-colors duration-200">
            {service.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {service.description}
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-destructive opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

export const ThermalServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <Thermometer className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Our Instruments</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Thermal Instruments We{" "}
            <span className="text-gradient">Calibrate</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive calibration services for temperature sensors, environmental chambers,
            validation systems, and thermal monitoring equipment — ensuring compliance and measurement accuracy.
          </p>

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

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <HorizontalScroll>
            {instruments.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </HorizontalScroll>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-primary-foreground font-semibold shadow-elevated">
            <Thermometer className="w-5 h-5" />
            <span>14 Thermal Instruments Calibrated</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
