import { motion } from "framer-motion";
import { ShieldCheck, Award } from "lucide-react";

export const CertificatesHeroSection = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 lg:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-primary/8 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-accent/6 blur-3xl" />
      </div>
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide">Verified & Accredited</span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Our Certifications &{" "}
            <span className="text-gradient">Accreditations</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            IQCL Instrument Quality Calibration LLP is fully accredited and certified
            to provide precision calibration services meeting international standards.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center justify-center gap-6 pt-4"
          >
            {[
              { icon: Award, label: "NABL Accredited" },
              { icon: ShieldCheck, label: "ISO 17025:2017" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
                <item.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
