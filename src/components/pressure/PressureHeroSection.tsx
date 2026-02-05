import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gauge, Target, TrendingUp, Clock } from "lucide-react";

const stats = [
  { icon: Gauge, value: "0.01%", label: "Pressure Accuracy" },
  { icon: Target, value: "14+", label: "Instrument Types" },
  { icon: Clock, value: "24-48hrs", label: "Turnaround" },
];

export const PressureHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      {/* Animated Background - Pressure Gauge Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Circular Gauge Pattern */}
        <svg className="absolute top-1/4 right-1/4 w-[500px] h-[500px] opacity-5" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="25"
              x2="100"
              y2="35"
              stroke="currentColor"
              strokeWidth="2"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
        </svg>

        {/* Floating Pressure Icons */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-20 text-accent/20"
        >
          <Gauge className="w-16 h-16" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-20 text-primary/20"
        >
          <TrendingUp className="w-12 h-12" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
            >
              <Gauge className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Pressure Calibration Experts</span>
            </motion.div>

            <div className="space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Pressure Department{" "}
                <span className="text-gradient">Precision Services</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Expert calibration services for pressure and vacuum measurement instruments. 
                We ensure your gauges, transmitters, and pressure devices meet the highest 
                accuracy standards with full traceability.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                Request Calibration
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="lg">
                Contact Us
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Animated Gauge Visual */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10" />
              <div className="absolute inset-8 rounded-full glass-card flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full p-8">
                  {/* Outer ring */}
                  <circle cx="100" cy="100" r="90" fill="none" stroke="hsl(var(--border))" strokeWidth="4" />
                  {/* Scale marks */}
                  {[...Array(11)].map((_, i) => (
                    <g key={i} transform={`rotate(${-135 + i * 27} 100 100)`}>
                      <line x1="100" y1="15" x2="100" y2="25" stroke="hsl(var(--foreground))" strokeWidth="2" />
                      <text
                        x="100"
                        y="38"
                        textAnchor="middle"
                        className="fill-muted-foreground text-[8px] font-medium"
                      >
                        {i * 10}
                      </text>
                    </g>
                  ))}
                  {/* Needle */}
                  <motion.g
                    initial={{ rotate: -135 }}
                    animate={{ rotate: 45 }}
                    transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                    style={{ transformOrigin: "100px 100px" }}
                  >
                    <polygon
                      points="100,25 95,100 100,105 105,100"
                      fill="hsl(var(--accent))"
                    />
                  </motion.g>
                  {/* Center dot */}
                  <circle cx="100" cy="100" r="8" fill="hsl(var(--primary))" />
                  {/* Label */}
                  <text x="100" y="150" textAnchor="middle" className="fill-foreground font-display font-bold text-sm">
                    PSI
                  </text>
                </svg>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-card rounded-xl p-4 shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">High Accuracy</div>
                    <div className="text-xs text-muted-foreground">±0.01% FS</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass-card rounded-xl p-4 shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Gauge className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Full Range</div>
                    <div className="text-xs text-muted-foreground">Vacuum to 700 bar</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
