import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Wrench, 
  Zap, 
  Gauge, 
  Wind, 
  Thermometer, 
  FlaskConical,
  Scale,
  Layers
} from "lucide-react";
import { DepartmentCard } from "./DepartmentCard";

const departments = [
  {
    title: "Mechanical Department",
    description: "Comprehensive dimensional and mechanical calibration services for precision instruments used in manufacturing and quality control.",
    icon: Wrench,
    color: "from-slate-900/20 to-blue-900/20",
    accentColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
    link: "/services/mechanical-calibration",
    instruments: [
      "Vernier Caliper",
      "Micrometer",
      "Height Gauge",
      "Dial Thickness Gauge",
      "V-Block",
      "Bevel Protractor",
      "Angle Plate",
      "Slip Gauge",
      "Bore Gauge",
      "Surface Plate",
      "Spirit Level",
      "Radius Gauge",
      "Telescopic Gauge",
      "Combination Set",
      "Depth Micrometer",
      "Measuring Tape",
      "Test Sieve",
      "Snap Gauge",
      "Cylindrical Measuring Pin",
      "Mic Setting Rod",
      "Inspection Gauge",
      "Fillet Weld Gauge",
      "Pie Tape",
      "Conical Mandrill",
      "Shore Hardness Tester",
      "Keyway Gauge",
    ],
  },
  {
    title: "Electro-Tech Department",
    description: "Precision electrical and electronic calibration covering voltage, current, resistance, and multi-function calibrators.",
    icon: Zap,
    color: "from-amber-900/20 to-orange-900/20",
    accentColor: "bg-gradient-to-br from-amber-500 to-orange-500",
    link: "/services/electro-tech",
    instruments: [
      "Multimeter",
      "Clamp Meter",
      "Insulation Tester",
      "AC/DC Volt Meter",
      "AC/DC Ampere Meter",
      "Power Meter",
      "Resistance Meter",
      "Capacitance Meter",
      "Frequency Meter",
      "Watt Meter",
      "Temperature Calibrator",
      "Time Totalizer",
      "Leakage Tester",
      "LCR Meter",
      "Stopwatch",
      "Loop Calibrator",
      "Multi-Function Calibrator",
      "Temperature Indicator",
      "Earth Resistance Tester",
      "Energy Meter",
      "Chart Recorder",
      "Temperature Controller",
      "Loop Power Calibrator",
    ],
  },
  {
    title: "Pressure Department",
    description: "Complete pressure and vacuum calibration services for gauges, transmitters, and safety equipment.",
    icon: Gauge,
    color: "from-emerald-900/20 to-teal-900/20",
    accentColor: "bg-gradient-to-br from-emerald-500 to-teal-500",
    link: "/services/pressure-calibration",
    instruments: [
      "Pressure Gauge",
      "Vacuum Gauge",
      "Pressure Transmitter",
      "Vacuum Transmitter",
      "Magnehelic Gauge",
      "Manometer",
      "Safety Valve",
      "Level Gauge",
      "Chart Recorder",
      "Barometer",
      "Pressure Switch",
      "Differential Pressure Transmitter",
      "Pressure Calibrator",
      "Compound Gauge",
    ],
  },
  {
    title: "Fluid Flow Department",
    description: "Accurate flow measurement calibration for industrial applications including environmental monitoring equipment.",
    icon: Wind,
    color: "from-violet-900/20 to-purple-900/20",
    accentColor: "bg-gradient-to-br from-violet-500 to-purple-500",
    instruments: [
      "Rota Meter",
      "Top Loading Calibrator",
      "Respirable Dust Sampler",
      "Stack Kit",
      "Pitot Tube",
      "Anemometer",
      "Gas Flow Meter",
      "Volume Flow Rate Instruments",
      "Flow Transmitter",
      "Dry Gas Meter",
      "PM 2.5 Sampler",
      "PM 10/2.5 Sampler",
      "Handy Sampler",
      "Gas Detector",
      "Water Flow Meter",
      "Personal Dust Sampler",
      "Benzene Sampler",
      "Flow Calibrator",
      "Flow Totalizer",
      "Velocity Transmitter",
    ],
  },
  {
    title: "Thermal Department",
    description: "Temperature sensor and thermal equipment calibration with traceable standards and validation services.",
    icon: Thermometer,
    color: "from-rose-900/20 to-pink-900/20",
    accentColor: "bg-gradient-to-br from-rose-500 to-pink-500",
    instruments: [
      "RTD Sensor",
      "Thermocouple Sensor",
      "RTD with Indicator",
      "Thermocouple with Indicator",
      "Temperature Gauge",
      "Freezer",
      "Digital Thermometer",
      "Chart Recorder",
      "Thermohygrometer",
      "Temperature Validation",
      "Temperature Gun",
      "Environmental Chamber",
      "Temperature Bath",
      "Cold Chamber",
    ],
  },
  {
    title: "Lab Instruments",
    description: "Specialized calibration for laboratory and analytical equipment used in research and quality testing.",
    icon: FlaskConical,
    color: "from-indigo-900/20 to-blue-900/20",
    accentColor: "bg-gradient-to-br from-indigo-500 to-blue-500",
    instruments: [
      "Muffle Furnace",
      "COD Incubator",
      "BOD Incubator",
      "pH Meter",
      "TDS Meter",
      "Conductivity Meter",
      "Hot Air Oven",
      "Thermometer",
      "Hot Plate",
      "Centrifuge",
      "Noise Dosimeter",
      "Magnetic Stirrer",
      "Temperature Datalogger",
      "Water Bath",
    ],
  },
  {
    title: "Mass & Volume Department",
    description: "Precise mass and volumetric calibration for weighing balances, weights, and laboratory glassware.",
    icon: Scale,
    color: "from-cyan-900/20 to-sky-900/20",
    accentColor: "bg-gradient-to-br from-cyan-500 to-sky-500",
    instruments: [
      "Weighing Balance",
      "Weight Box",
      "Standard Weights",
      "Glassware",
      "Burette",
      "Measuring Cylinder",
      "Volumetric Flask",
      "Beaker",
      "Can",
      "Measuring Jar",
      "Micropipette",
      "Glass Pipette",
    ],
  },
];

export const DepartmentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="departments" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Layers className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Departments</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            7 Specialized{" "}
            <span className="text-gradient">Calibration Departments</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Each department is equipped with state-of-the-art calibration standards and 
            operated by expert metrologists to ensure the highest accuracy.
          </p>
        </motion.div>

        {/* Departments Grid */}
        <div className="space-y-8">
          {departments.map((dept, index) => (
            <DepartmentCard
              key={dept.title}
              {...dept}
              index={index}
            />
          ))}
        </div>

        {/* Total Instruments Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-elevated"
          >
            <Layers className="w-6 h-6" />
            <span className="text-lg">150+ Instrument Types Across 7 Departments</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
