import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Gauge, MapPin, FlaskConical, FileCheck2, ArrowRight,
  Thermometer, Zap, Scale, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import labMassVolume from "@/assets/lab-mass-volume.png";
import labCalibration from "@/assets/lab-calibration.png";
import labTools from "@/assets/lab-tools.png";
import labHardness from "@/assets/lab-hardness.jpeg";

const services = [
  {
    icon: Gauge,
    title: "Instrument Calibration",
    description: "Precise calibration of mechanical, electrical, and dimensional instruments with traceable measurements.",
    features: ["Pressure Gauges", "Micrometers", "Vernier Calipers", "Dial Indicators"],
    link: "/services/mechanical-calibration",
    image: labTools,
  },
  {
    icon: MapPin,
    title: "On-site Calibration",
    description: "Convenient on-location calibration services to minimize your equipment downtime.",
    features: ["Factory Setup", "Production Lines", "Heavy Equipment", "Immovable Assets"],
    link: "#contact",
    image: labCalibration,
  },
  {
    icon: FlaskConical,
    title: "Testing & Analysis",
    description: "Comprehensive testing services to verify instrument performance and compliance.",
    features: ["Performance Testing", "Accuracy Verification", "Uncertainty Analysis", "Compliance Checks"],
    link: "#contact",
    image: labMassVolume,
  },
  {
    icon: FileCheck2,
    title: "Certificate Issuance",
    description: "Internationally recognized calibration certificates with complete measurement data.",
    features: ["NABL Certificates", "Traceability Reports", "Uncertainty Statements", "Digital Records"],
    link: "#contact",
    image: labHardness,
  },
];

const disciplines = [
  { icon: Scale, label: "Mass & Balance", link: "/services/mechanical-calibration" },
  { icon: Thermometer, label: "Temperature", link: "#contact" },
  { icon: Gauge, label: "Pressure", link: "/services/pressure-calibration" },
  { icon: Zap, label: "Electrical", link: "/services/electro-tech" },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-accent uppercase mb-4"
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
            animate={isInView && !prefersReducedMotion ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="w-8 h-px bg-accent" />
            Our Services
            <span className="w-8 h-px bg-accent" />
          </motion.span>
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
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {disciplines.map((discipline) => (
            <motion.div key={discipline.label} whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}>
              <Link
                to={discipline.link}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 group"
              >
                <discipline.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{discipline.label}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid with Images */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={prefersReducedMotion ? {} : { y: -6 }}
              className="group relative rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-elevated transition-all duration-500 overflow-hidden"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              <div className="p-6 pt-4">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 text-xs font-medium bg-secondary/80 text-secondary-foreground rounded-full border border-border/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
