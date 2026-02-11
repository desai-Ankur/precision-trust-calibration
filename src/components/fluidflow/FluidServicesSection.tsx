import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Droplets, Wind, Gauge, Thermometer, Activity,
  CircleDot, Radio, BarChart3, Settings, AlertCircle,
  Waves, CloudRain, Flame, Timer
} from "lucide-react";
import { HorizontalScroll, ScrollCard } from "@/components/ui/horizontal-scroll";

const instruments = [
  { name: "Rota Meter", icon: Gauge, description: "Variable area flow meter calibration for liquids and gases" },
  { name: "Top Loading Calibrator", icon: Settings, description: "Precision top-loading flow calibration services" },
  { name: "Respirable Dust Sampler", icon: CloudRain, description: "Environmental dust sampling instrument calibration" },
  { name: "Stack Kit", icon: BarChart3, description: "Stack emission monitoring kit calibration" },
  { name: "Pitot Tube", icon: Activity, description: "Differential pressure velocity measurement calibration" },
  { name: "Anemometer", icon: Wind, description: "Wind speed and airflow measurement calibration" },
  { name: "Gas Flow Meter", icon: Flame, description: "Precision gas flow measurement calibration" },
  { name: "Volume Flow Rate Instruments", icon: Droplets, description: "Volumetric flow rate measurement calibration" },
  { name: "Flow Transmitter", icon: Radio, description: "Electronic flow signal transmitter calibration" },
  { name: "Dry Gas Meter", icon: Gauge, description: "Dry gas volume measurement calibration" },
  { name: "PM 2.5 Sampler", icon: CloudRain, description: "Fine particulate matter sampler calibration" },
  { name: "PM 10/2.5 Sampler", icon: CloudRain, description: "Coarse & fine particulate sampler calibration" },
  { name: "Handy Sampler", icon: CircleDot, description: "Portable sampling instrument calibration" },
  { name: "Gas Detector", icon: AlertCircle, description: "Gas leak and concentration detector calibration" },
  { name: "Water Flow Meter", icon: Waves, description: "Water flow measurement instrument calibration" },
  { name: "Personal Dust Sampler", icon: Thermometer, description: "Personal exposure dust sampler calibration" },
  { name: "Benzene Sampler", icon: AlertCircle, description: "Benzene vapour sampling instrument calibration" },
  { name: "Flow Calibrator", icon: Settings, description: "Reference flow calibrator verification & calibration" },
  { name: "Flow Totalizer", icon: Timer, description: "Cumulative flow totalizer calibration services" },
  { name: "Velocity Transmitter", icon: Activity, description: "Velocity signal transmitter calibration" },
];

const ServiceCard = ({ service, index }: { service: typeof instruments[0]; index: number }) => {
  const Icon = service.icon;

  return (
    <ScrollCard index={index}>
      <div className="group relative h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/50 hover:shadow-elevated transition-all duration-300">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10">
          <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Icon className="w-7 h-7 text-primary-foreground" />
          </div>

          <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-accent transition-colors duration-200">
            {service.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {service.description}
          </p>

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

export const FluidServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Droplets className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Instruments</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Flow Instruments We{" "}
            <span className="text-gradient">Calibrate</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive calibration services for flow meters, environmental samplers, gas detectors,
            and velocity instruments — ensuring compliance and measurement accuracy.
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

        {/* Horizontal Scroll */}
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

        {/* Total Count Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-elevated">
            <Droplets className="w-5 h-5" />
            <span>20+ Fluid Flow Instruments Calibrated</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
