import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, FlaskConical, Shield, Award, Microscope } from "lucide-react";
import { Link } from "react-router-dom";

export const LabHeroSection = () => {
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
        <motion.div
          className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="labgrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#labgrid)" />
        </svg>

        {/* Molecule-like animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <motion.path
            d="M0,400 Q150,350 300,400 T600,380 T900,420 T1200,400"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
          />
          <motion.path
            d="M0,420 Q200,380 400,430 T800,400 T1200,420"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
          />
        </svg>

        {/* Floating flask icons */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10"
            style={{ top: `${20 + i * 14}%`, left: `${10 + i * 18}%` }}
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          >
            <FlaskConical className="w-8 h-8" />
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
            <FlaskConical className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Lab Instruments Department</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6"
          >
            Laboratory Instrument{" "}
            <span className="text-gradient">Calibration Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            ISO/IEC 17025:2017 accredited calibration for analytical and laboratory equipment —
            from pH meters and conductivity meters to incubators, ovens, and centrifuges.
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
              { icon: Microscope, text: "14+ Instrument Types" },
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
