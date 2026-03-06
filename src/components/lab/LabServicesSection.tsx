import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FlaskConical, Thermometer, Gauge, Settings, Activity,
  Radio, Wind, Timer, Beaker, Volume2, Waves, BarChart3
} from "lucide-react";
import { HorizontalScroll, ScrollCard } from "@/components/ui/horizontal-scroll";

const instruments = [
  { name: "Muffle Furnace", icon: Thermometer, description: "High-temperature muffle furnace calibration for lab heating applications" },
  { name: "COD Incubator", icon: Timer, description: "Chemical oxygen demand incubator temperature calibration" },
  { name: "BOD Incubator", icon: Timer, description: "Biological oxygen demand incubator calibration services" },
  { name: "pH Meter", icon: Gauge, description: "Precision pH meter calibration for accurate acidity measurement" },
  { name: "TDS Meter", icon: Activity, description: "Total dissolved solids meter calibration and verification" },
  { name: "Conductivity Meter", icon: Radio, description: "Electrical conductivity meter calibration for solution analysis" },
  { name: "Hot Air Oven", icon: Wind, description: "Hot air oven temperature uniformity and accuracy calibration" },
  { name: "Thermometer", icon: Thermometer, description: "Laboratory thermometer calibration across temperature ranges" },
  { name: "Hot Plate", icon: Settings, description: "Hot plate surface temperature calibration and uniformity testing" },
  { name: "Centrifuge", icon: Waves, description: "Centrifuge RPM speed verification and calibration" },
  { name: "Noise Dosimeter", icon: Volume2, description: "Noise dosimeter and sound level meter calibration" },
  { name: "Magnetic Stirrer", icon: Settings, description: "Magnetic stirrer speed and temperature calibration" },
  { name: "Temperature Datalogger", icon: BarChart3, description: "Temperature datalogger accuracy verification and calibration" },
  { name: "Water Bath", icon: Beaker, description: "Laboratory water bath temperature calibration and uniformity mapping" },
];

const ServiceCard = ({ service, index }: { service: typeof instruments[0]; index: number }) => {
  const Icon = service.icon;

  return (
    <ScrollCard index={index}>
      <div className="group relative h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-elevated transition-all duration-300">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Icon className="w-7 h-7 text-primary-foreground" />
          </div>

          <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
            {service.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {service.description}
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

export const LabServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <FlaskConical className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Instruments</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Lab Instruments We{" "}
            <span className="text-gradient">Calibrate</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive calibration services for laboratory analytical equipment, incubators,
            ovens, meters, and monitoring instruments — ensuring compliance and measurement accuracy.
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
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-primary-foreground font-semibold shadow-elevated">
            <FlaskConical className="w-5 h-5" />
            <span>14 Lab Instruments Calibrated</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
