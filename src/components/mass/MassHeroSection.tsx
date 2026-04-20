import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Shield, Award, Beaker } from "lucide-react";
import { Link } from "react-router-dom";

export const MassHeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-hero">
      <motion.div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ y: bgY }}>
        <motion.div
          className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-primary/8 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="massgrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#massgrid)" />
        </svg>

        {/* Animated balance scale lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <motion.line
            x1="0" y1="400" x2="1200" y2="400"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            strokeDasharray="6 8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          />
        </svg>

        {/* Floating scale icons */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10"
            style={{ top: `${15 + i * 16}%`, left: `${8 + i * 19}%` }}
            animate={{ y: [0, -18, 0], rotate: [0, 6, -6, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          >
            <Scale className="w-8 h-8" />
          </motion.div>
        ))}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Scale className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Mass & Weighing Department</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6"
          >
            Mass & Weighing{" "}
            <span className="text-gradient">Calibration Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Precision mass measurement, weighing system calibration, and volumetric accuracy services
            for laboratory and industrial applications — fully traceable to national standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/contact">
                Request Calibration
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: Beaker, text: "12+ Instrument Types" },
              { icon: Shield, text: "NABL Traceable" },
              { icon: Award, text: "ISO 17025 Accredited" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50"
              >
                <item.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
