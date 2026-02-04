import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Truck, Clock, Shield, CheckCircle2 } from "lucide-react";

const services = [
  {
    type: "In-House Calibration",
    icon: Building2,
    description: "Send your instruments to our ISO 17025 accredited facility for comprehensive calibration.",
    features: [
      "Controlled laboratory environment",
      "Full range of calibration standards",
      "Detailed calibration certificates",
      "Secure instrument handling",
    ],
    color: "from-primary to-primary/70",
    delay: 0,
  },
  {
    type: "On-Site Calibration",
    icon: Truck,
    description: "Our expert technicians come to your facility with portable calibration equipment.",
    features: [
      "Minimal equipment downtime",
      "No transportation risks",
      "Same accuracy standards",
      "Flexible scheduling",
    ],
    color: "from-accent to-accent/70",
    delay: 0.2,
  },
];

export const MechOnSiteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(45deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20 mb-6">
            <span className="text-sm font-medium text-success">Flexible Service Options</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            In-House & On-Site{" "}
            <span className="text-gradient">Calibration Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the calibration service that best fits your operational needs. 
            We offer the same high standards of accuracy regardless of location.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: service.delay }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border/50 relative overflow-hidden">
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {service.type}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          {[
            { icon: Clock, text: "24-48 Hour Turnaround" },
            { icon: Shield, text: "ISO 17025 Accredited" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50"
            >
              <item.icon className="w-5 h-5 text-accent" />
              <span className="font-medium text-foreground">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
