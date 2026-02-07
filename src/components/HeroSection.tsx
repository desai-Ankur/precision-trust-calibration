import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Clock, Gauge, Thermometer, Zap, CheckCircle2 } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const stats = [
  { icon: Shield, value: "ISO 17025", label: "Accredited" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Clock, value: "48hrs", label: "Fast Turnaround" },
];

const floatingIcons = [
  { Icon: Gauge, x: "10%", y: "20%", delay: 0, size: 48 },
  { Icon: Thermometer, x: "85%", y: "15%", delay: 0.5, size: 40 },
  { Icon: Zap, x: "75%", y: "75%", delay: 1, size: 44 },
  { Icon: Shield, x: "5%", y: "70%", delay: 1.5, size: 36 },
];

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
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
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Animated Background Layers */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: prefersReducedMotion ? 0 : backgroundY }}
      >
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/40" />
        
        {/* Radial glow effects */}
        <div className="absolute top-1/4 -right-32 w-[700px] h-[700px] bg-accent/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        
        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={prefersReducedMotion ? {} : {
            background: [
              "radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Technical Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Diagonal lines accent */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              hsl(var(--primary)),
              hsl(var(--primary)) 1px,
              transparent 1px,
              transparent 60px
            )`
          }}
        />
      </motion.div>

      {/* Floating Technical Icons */}
      {!prefersReducedMotion && floatingIcons.map(({ Icon, x, y, delay, size }, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:flex items-center justify-center"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div 
            className="rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center shadow-soft"
            style={{ width: size + 24, height: size + 24 }}
          >
            <Icon className="text-primary/40" style={{ width: size * 0.5, height: size * 0.5 }} />
          </div>
        </motion.div>
      ))}

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        style={{ y: prefersReducedMotion ? 0 : contentY, opacity: prefersReducedMotion ? 1 : opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              <Button 
                variant="default" 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-primary hover:shadow-elevated transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request Calibration
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border/50 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300"
              >
                Contact Us
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

          {/* Right Content - Premium Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glowing backdrop */}
              <motion.div 
                className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-20 blur-3xl"
                animate={prefersReducedMotion ? {} : {
                  scale: [1, 1.05, 1],
                  opacity: [0.15, 0.25, 0.15],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Main Card */}
              <div className="absolute inset-4 rounded-3xl glass-card p-8 flex flex-col justify-between overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 blur-2xl" />
                
                <div className="space-y-6 relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-elevated"
                    animate={prefersReducedMotion ? {} : { rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Shield className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      ISO/IEC 17025:2017
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Internationally recognized accreditation ensuring the highest quality in calibration services
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 relative z-10">
                  <div className="h-2.5 bg-secondary/80 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ delay: 1, duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="h-full bg-gradient-primary rounded-full relative"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 2.5 }}
                      />
                    </motion.div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Measurement Accuracy</span>
                    <span className="font-semibold text-success flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      99.5%
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-card rounded-xl p-4 shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">NABL Certified</div>
                    <div className="text-xs text-muted-foreground">Lab #C-1234</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass-card rounded-xl p-4 shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Fast Turnaround</div>
                    <div className="text-xs text-muted-foreground">24-48 Hours</div>
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
