import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Ruler, Circle, Square, Triangle, Hexagon, Target, Gauge, Box } from "lucide-react";
import { cn } from "@/lib/utils";

const instrumentGroups = [
  {
    category: "Dimensional Measuring Instruments",
    icon: Ruler,
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
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border border-border/50 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 hover:bg-secondary/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="text-left">
            <h3 className="font-display font-semibold text-foreground">{group.category}</h3>
            <p className="text-sm text-muted-foreground">{group.instruments.length} instruments</p>
          </div>
        </div>
        <ChevronDown className={cn(
          "w-5 h-5 text-muted-foreground transition-transform duration-300",
          isOpen && "rotate-180"
        )} />
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-5 pt-0 grid sm:grid-cols-2 gap-3">
          {group.instruments.map((instrument, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isOpen ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
              <span className="text-sm text-foreground">{instrument}</span>
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
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
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
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-elevated">
            <Target className="w-5 h-5" />
            <span>27+ Mechanical Instruments Calibrated</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
