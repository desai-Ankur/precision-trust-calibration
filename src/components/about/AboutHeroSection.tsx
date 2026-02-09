import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Crosshair, Gauge, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const floatingIcons = [
  { icon: Crosshair, x: "10%", y: "20%", delay: 0 },
  { icon: Gauge, x: "85%", y: "30%", delay: 0.5 },
  { icon: Shield, x: "75%", y: "70%", delay: 1 },
  { icon: Crosshair, x: "15%", y: "75%", delay: 1.5 },
];

export const AboutHeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const anim = (props: Record<string, any>) => (reducedMotion ? {} : props) as any;

  return (
    <section ref={ref} className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-hero">
      {/* Animated mesh */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
      </motion.div>

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center justify-center w-14 h-14 rounded-2xl glass-card text-primary/40"
          style={{ left: item.x, top: item.y }}
          initial={anim({ opacity: 0, scale: 0.5 })}
          animate={anim({ opacity: 1, scale: 1 })}
          transition={{ delay: 0.8 + item.delay, duration: 0.6, type: "spring" }}
        >
          <motion.div
            animate={anim({ y: [0, -8, 0] })}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            <item.icon className="w-6 h-6" />
          </motion.div>
        </motion.div>
      ))}

      <motion.div className="container mx-auto px-6 pt-32 pb-20 relative z-10" style={{ opacity }}>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.span
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-accent uppercase"
            {...anim({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } })}
            transition={{ duration: 0.6 }}
          >
            <span className="w-8 h-px bg-accent" />
            About IQCL
            <span className="w-8 h-px bg-accent" />
          </motion.span>

          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            {...anim({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } })}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Precision Instruments.{" "}
            <span className="text-gradient">Trusted Quality.</span>{" "}
            Measured Excellence.
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            {...anim({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } })}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            IQCL is a NABL-accredited calibration laboratory delivering certified accuracy 
            and trusted results to industries across India since 2008.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            {...anim({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } })}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#journey">
                Our Journey
                <ArrowDown className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/#contact">
                <Mail className="w-4 h-4 mr-1" />
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
