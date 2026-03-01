import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, CheckCircle, FileCheck } from "lucide-react";
import labHardness from "@/assets/lab-hardness.jpeg";
import labPrecision from "@/assets/lab-precision.png";

export const AccreditationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="accreditations" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-sm font-semibold tracking-wider text-accent uppercase">
                Accreditations & Certifications
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
                Internationally{" "}
                <span className="text-gradient">Recognized Standards</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                IQCL is accredited by the National Accreditation Board for Testing and
                Calibration Laboratories (NABL), ensuring our calibration services meet
                the stringent requirements of ISO/IEC 17025:2017.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Shield, title: "ISO/IEC 17025:2017", description: "General requirements for the competence of testing and calibration laboratories" },
                { icon: Award, title: "NABL Accreditation", description: "Recognized by India's premier accreditation body for calibration laboratories" },
                { icon: FileCheck, title: "Traceable Standards", description: "All measurements traceable to national and international standards" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto space-y-4">
              <motion.div
                className="rounded-2xl overflow-hidden shadow-elevated border border-border/30"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src={labPrecision} alt="Precision calibration instruments" className="w-full h-64 object-cover" loading="lazy" />
              </motion.div>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-elevated border border-border/30"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src={labHardness} alt="Hardness testing equipment" className="w-full h-52 object-cover" loading="lazy" />
              </motion.div>

              {/* Floating verification badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-card rounded-xl p-4 shadow-elevated z-10"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-sm font-semibold">Verified & Compliant</span>
                </div>
              </motion.div>

              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-accent/20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-primary/20 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
