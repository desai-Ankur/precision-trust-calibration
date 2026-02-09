import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutCTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [rm, setRm] = useState(false);
  useEffect(() => { setRm(window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);

  return (
    <section className="py-24 lg:py-32 bg-gradient-dark relative overflow-hidden" ref={ref}>
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="text-center max-w-3xl mx-auto space-y-8"
          {...(rm ? {} : { initial: { opacity: 0, y: 30 }, animate: inView ? { opacity: 1, y: 0 } : {} })}
          transition={{ duration: 0.7 }}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
            Let's Build{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-success">
              Quality Together
            </span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto">
            Partner with IQCL for certified calibration services that elevate your quality standards 
            and ensure regulatory compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">
                Contact IQCL
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button size="lg" className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/20 backdrop-blur-sm" asChild>
              <Link to="/#contact">
                <Phone className="w-4 h-4 mr-1" />
                Get a Quote
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
