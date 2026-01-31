import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";

const stats = [
  { icon: Shield, value: "ISO 17025", label: "Accredited" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Clock, value: "48hrs", label: "Fast Turnaround" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm font-medium text-success">NABL Accredited Laboratory</span>
            </motion.div>

            <div className="space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Precision Calibration{" "}
                <span className="text-gradient">You Can Trust</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                IQCL is a premier calibration laboratory accredited with ISO/IEC 17025:2017. 
                We deliver accurate, traceable calibration services that meet international standards.
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
              {/* Main Card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-10" />
              <div className="absolute inset-4 rounded-2xl glass-card p-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-elevated">
                    <Shield className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      ISO/IEC 17025:2017
                    </h3>
                    <p className="text-muted-foreground">
                      Internationally recognized accreditation ensuring the highest quality in calibration services
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Measurement Accuracy</span>
                    <span className="font-semibold text-success">99.5%</span>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
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
                animate={{ y: [0, 10, 0] }}
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
      </div>
    </section>
  );
};
