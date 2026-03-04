import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, ArrowDown } from "lucide-react";

export const ContactHeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
          opacity: 0.4,
        }} />
        <motion.div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: "hsl(var(--primary) / 0.08)" }}
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: "hsl(var(--accent) / 0.1)" }}
          animate={{ scale: [1, 1.2, 1], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <MessageSquare className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Get In Touch</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6"
        >
          Contact{" "}
          <span className="text-gradient">IQCL</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Precision You Can Trust. Reach out for calibration services, quality assurance, 
          or technical consultation — our experts are ready to help.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span>Scroll to form</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
