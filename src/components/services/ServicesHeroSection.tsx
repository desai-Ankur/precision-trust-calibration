import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Shield, 
  Award, 
  Target, 
  Zap,
  ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";

export const ServicesHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const floatingIcons = [
    { Icon: Shield, delay: 0, x: "10%", y: "20%" },
    { Icon: Award, delay: 0.2, x: "85%", y: "25%" },
    { Icon: Target, delay: 0.4, x: "15%", y: "70%" },
    { Icon: Zap, delay: 0.6, x: "80%", y: "65%" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          {/* Tech Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
          
          {/* Radial Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        </motion.div>
      </div>

      {/* Floating Technical Icons */}
      {floatingIcons.map(({ Icon, delay, x, y: yPos }, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:flex"
          style={{ left: x, top: yPos }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + delay, duration: 0.5, type: "spring" }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-16 h-16 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50 shadow-elevated flex items-center justify-center"
          >
            <Icon className="w-7 h-7 text-primary" />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 container mx-auto px-6 pt-32 pb-20"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-accent"
            />
            <span className="text-sm font-medium text-primary">
              NABL Accredited • ISO/IEC 17025:2017 Certified
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6"
          >
            <span className="block">Precision Calibration.</span>
            <span className="block text-gradient">Certified Accuracy.</span>
            <span className="block">Trusted Results.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Industry-leading calibration services across 7 specialized departments. 
            From mechanical instruments to thermal sensors — we deliver accuracy you can trust.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="group bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-6 text-lg shadow-elevated"
              asChild
            >
              <a href="#departments">
                Explore Our Services
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-2 hover:bg-secondary"
              asChild
            >
              <Link to="/#contact">
                Request Calibration
              </Link>
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-16 flex flex-wrap justify-center gap-8 lg:gap-16"
          >
            {[
              { value: "7", label: "Departments" },
              { value: "150+", label: "Instrument Types" },
              { value: "50,000+", label: "Calibrations/Year" },
              { value: "15+", label: "Years Excellence" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#why-iqcl"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};
