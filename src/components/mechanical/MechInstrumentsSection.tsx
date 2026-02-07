import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronDown, Ruler, Triangle, Target, Gauge, Box, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const instrumentGroups = [
  {
    category: "Dimensional Measuring Instruments",
    icon: Ruler,
    color: "from-blue-500 to-cyan-500",
    instruments: [
      "Vernier Caliper (Outside)",
      "Micrometer",
      "Height Gauge",
      "Depth Micrometer",
      "Dial Thickness Gauge",
      "Measuring Tape & Scale",
    ],
  },
  {
    category: "Gauges & Comparators",
    icon: Gauge,
    color: "from-emerald-500 to-teal-500",
    instruments: [
      "Dial Gauge (Plunger & Lever Type)",
      "Bore Gauge",
      "Snap Gauge",
      "Radius Gauge",
      "Telescopic Gauge",
      "Inspection Gauge",
    ],
  },
  {
    category: "Angular & Surface Instruments",
    icon: Triangle,
    color: "from-violet-500 to-purple-500",
    instruments: [
      "Bevel Protractor",
      "Angle Plate",
      "V-Block",
      "Surface Plate",
      "Spirit Level",
      "Combination Set",
    ],
  },
  {
    category: "Precision Standards",
    icon: Target,
    color: "from-orange-500 to-amber-500",
    instruments: [
      "Slip Gauge",
      "Cylindrical Measuring Pin",
      "Micrometer Setting Rod",
      "Conical Mandrel",
    ],
  },
  {
    category: "Specialty Instruments",
    icon: Box,
    color: "from-rose-500 to-pink-500",
    instruments: [
      "Test Sieve",
      "Fillet Weld Gauge",
      "Shore Hardness Tester",
      "Keyway Gauge",
      "Pie Tape",
    ],
  },
];

const InstrumentAccordion = ({ group, index, isOpen, onToggle }: { 
  group: typeof instrumentGroups[0]; 
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const Icon = group.icon;
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);
  
  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "border border-border/50 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm",
        "transition-all duration-300",
        isOpen && "border-accent/30 shadow-elevated"
      )}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
        className="w-full flex items-center justify-between p-5 hover:bg-secondary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
      >
        <div className="flex items-center gap-4">
          <motion.div 
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br",
              group.color
            )}
            whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          <div className="text-left">
            <h3 className="font-display font-semibold text-foreground">{group.category}</h3>
            <p className="text-sm text-muted-foreground">{group.instruments.length} instruments</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>
      
      <motion.div
        id={`accordion-content-${index}`}
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0, 
          opacity: isOpen ? 1 : 0 
        }}
        transition={{ 
          duration: prefersReducedMotion ? 0 : 0.3, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
        className="overflow-hidden"
      >
        <div className="p-5 pt-0 grid sm:grid-cols-2 gap-3">
          {group.instruments.map((instrument, i) => (
            <motion.div
              key={i}
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
              animate={isOpen ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.3, 
                delay: prefersReducedMotion ? 0 : i * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={prefersReducedMotion ? {} : { x: 4 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-200 group cursor-default"
            >
              <motion.div 
                className={cn(
                  "w-2 h-2 rounded-full bg-gradient-to-r",
                  group.color
                )}
                whileHover={prefersReducedMotion ? {} : { scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
              <span className="text-sm text-foreground group-hover:text-accent transition-colors duration-200">
                {instrument}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const MechInstrumentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Wrench className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Instruments We Calibrate</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Comprehensive Mechanical{" "}
            <span className="text-gradient">Instrument Coverage</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We calibrate a wide range of mechanical instruments across dimensional, 
            angular, surface, and specialty measurement categories.
          </p>
        </motion.div>

        {/* Accordion Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {instrumentGroups.map((group, index) => (
            <InstrumentAccordion
              key={index}
              group={group}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Total Count Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mt-12"
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-elevated"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Target className="w-5 h-5" />
            <span>27+ Mechanical Instruments Calibrated</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
