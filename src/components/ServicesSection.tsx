import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Gauge, 
  MapPin, 
  FlaskConical, 
  FileCheck2, 
  ArrowRight,
  Thermometer,
  Zap,
  Scale
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Gauge,
    title: "Instrument Calibration",
    description: "Precise calibration of mechanical, electrical, and dimensional instruments with traceable measurements.",
    features: ["Pressure Gauges", "Micrometers", "Vernier Calipers", "Dial Indicators"],
  },
  {
    icon: MapPin,
    title: "On-site Calibration",
    description: "Convenient on-location calibration services to minimize your equipment downtime.",
    features: ["Factory Setup", "Production Lines", "Heavy Equipment", "Immovable Assets"],
  },
  {
    icon: FlaskConical,
    title: "Testing & Analysis",
    description: "Comprehensive testing services to verify instrument performance and compliance.",
    features: ["Performance Testing", "Accuracy Verification", "Uncertainty Analysis", "Compliance Checks"],
  },
  {
    icon: FileCheck2,
    title: "Certificate Issuance",
    description: "Internationally recognized calibration certificates with complete measurement data.",
    features: ["NABL Certificates", "Traceability Reports", "Uncertainty Statements", "Digital Records"],
  },
];

const disciplines = [
  { icon: Scale, label: "Mass & Balance" },
  { icon: Thermometer, label: "Temperature" },
  { icon: Gauge, label: "Pressure" },
  { icon: Zap, label: "Electrical" },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-accent uppercase">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Comprehensive Calibration Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From laboratory instruments to industrial equipment, we provide end-to-end 
            calibration services that meet the highest standards of accuracy.
          </p>
        </motion.div>

        {/* Disciplines Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {disciplines.map((discipline) => (
            <div
              key={discipline.label}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <discipline.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{discipline.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-elevated transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button variant="default" size="lg" asChild>
            <a href="#contact">
              Request a Calibration Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
