import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Gauge, Shield, Award, Thermometer, Zap, CheckCircle2 } from "lucide-react";

const marqueeText = "IQCL Instrument and Calibration LLP";
const accentIcons = [Gauge, Shield, Award, Thermometer, Zap, CheckCircle2];

export const MarqueeSection = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Create repeated content for seamless loop
  const renderMarqueeContent = (key: string) => (
    <div key={key} className="flex items-center gap-8 md:gap-16 px-4 md:px-8">
      {[0, 1, 2].map((index) => (
        <div key={index} className="flex items-center gap-8 md:gap-16">
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            {(() => {
              const Icon = accentIcons[index % accentIcons.length];
              return <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />;
            })()}
          </div>
          
          {/* Text */}
          <span className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground whitespace-nowrap tracking-tight">
            {marqueeText}
          </span>
          
          {/* Decorative dot */}
          <div className="flex-shrink-0 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-primary shadow-soft" />
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-secondary/30">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-secondary/80 via-secondary/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-secondary/80 via-secondary/50 to-transparent z-10 pointer-events-none" />

      {/* Marquee container */}
      <div className="relative">
        {prefersReducedMotion ? (
          // Static version for reduced motion
          <div className="flex items-center justify-center gap-8 px-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              {marqueeText}
            </span>
          </div>
        ) : (
          // Animated marquee
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-33.333%"],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {renderMarqueeContent("set-1")}
            {renderMarqueeContent("set-2")}
            {renderMarqueeContent("set-3")}
          </motion.div>
        )}
      </div>

      {/* Subtle bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};
