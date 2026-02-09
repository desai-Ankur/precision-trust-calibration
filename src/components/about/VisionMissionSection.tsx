import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Eye, Target, Diamond } from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be the most trusted name in precision calibration and quality assurance across India, setting the benchmark for accuracy and innovation in metrology.",
    gradient: "from-primary/10 to-accent/10",
  },
  {
    icon: Target,
    title: "Our Mission",
    description: "To deliver accurate, reliable, and traceable calibration services that empower industries to maintain the highest standards of quality and compliance.",
    gradient: "from-accent/10 to-success/10",
  },
  {
    icon: Diamond,
    title: "Our Values",
    description: "Accuracy in every measurement. Integrity in every certificate. Innovation in every process. We are committed to excellence without compromise.",
    gradient: "from-success/10 to-primary/10",
  },
];

export const VisionMissionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [rm, setRm] = useState(false);
  useEffect(() => { setRm(window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);

  return (
    <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          {...(rm ? {} : { initial: { opacity: 0, y: 20 }, animate: inView ? { opacity: 1, y: 0 } : {} })}
          transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-accent uppercase">
            <span className="w-8 h-px bg-accent" />Our Foundation<span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Vision, Mission & <span className="text-gradient">Values</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 overflow-hidden`}
              {...(rm ? {} : {
                initial: { opacity: 0, y: 30 },
                animate: inView ? { opacity: 1, y: 0 } : {},
                whileHover: { y: -6, transition: { duration: 0.2 } },
              })}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
