import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Clock, Play } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import labMechanical from "@/assets/lab-mechanical.png";
import labPrecision from "@/assets/lab-precision.png";
import labElectrotech from "@/assets/lab-electrotech.png";

const stats = [
  { icon: Shield, value: "ISO 17025", label: "Accredited" },
  { icon: Award, value: "40+", label: "Years Experience" },
  { icon: Clock, value: "48hrs", label: "Fast Turnaround" },
];

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Video Background */}
      <motion.div className="absolute inset-0" style={{ y: prefersReducedMotion ? 0 : backgroundY }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster=""
        >
          <source src="/videos/hero-calibration.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </motion.div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        style={{ y: prefersReducedMotion ? 0 : contentY, opacity: prefersReducedMotion ? 1 : opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-success/10 border border-success/20 backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
              </span>
              <span className="text-sm font-semibold text-success tracking-wide">NABL Accredited Laboratory</span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Precision{" "}
                <span className="relative">
                  <span className="text-gradient">Calibration</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
                <br />
                <span className="text-muted-foreground/80">You Can Trust</span>
              </motion.h1>

              <motion.p
                className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                IQCL is a premier calibration laboratory accredited with ISO/IEC 17025:2017.
                We deliver accurate, traceable calibration services that meet international standards.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button variant="hero" size="lg" className="group" asChild>
                <Link to="/#contact">
                  Request Calibration
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/services">
                  <Play className="w-4 h-4 mr-1" />
                  Explore Services
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/80 backdrop-blur-sm border border-border/50 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Image Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative grid grid-cols-2 gap-4">
              {/* Main large image */}
              <motion.div
                className="col-span-2 rounded-2xl overflow-hidden shadow-elevated border border-border/30"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={labMechanical}
                  alt="IQCL Mechanical Calibration Laboratory"
                  className="w-full h-56 object-cover"
                  loading="eager"
                />
              </motion.div>

              {/* Bottom left */}
              <motion.div
                className="rounded-2xl overflow-hidden shadow-elevated border border-border/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.04 }}
              >
                <img
                  src={labPrecision}
                  alt="Precision measurement instruments"
                  className="w-full h-40 object-cover"
                  loading="eager"
                />
              </motion.div>

              {/* Bottom right */}
              <motion.div
                className="rounded-2xl overflow-hidden shadow-elevated border border-border/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.04 }}
              >
                <img
                  src={labElectrotech}
                  alt="Electro-tech calibration lab"
                  className="w-full h-40 object-cover"
                  loading="eager"
                />
              </motion.div>

              {/* Floating NABL badge */}
              <motion.div
                animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-card rounded-xl p-3 shadow-elevated z-10"
              >
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-success/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">NABL Certified</div>
                    <div className="text-[10px] text-muted-foreground">ISO 17025</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          animate={prefersReducedMotion ? {} : { y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-muted-foreground/50"
            animate={prefersReducedMotion ? {} : { y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
