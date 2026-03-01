import { motion } from "framer-motion";
import { LucideIcon, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Department image mapping
import labMechanical from "@/assets/lab-mechanical.png";
import labElectrotech from "@/assets/lab-electrotech.png";
import labPrecision from "@/assets/lab-precision.png";
import labFluidFlow from "@/assets/lab-fluid-flow.png";
import labCalibration from "@/assets/lab-calibration.png";
import labInstruments from "@/assets/lab-instruments.png";
import labMassVolume from "@/assets/lab-mass-volume.png";

const departmentImages: Record<string, string> = {
  "Mechanical Department": labMechanical,
  "Electro-Tech Department": labElectrotech,
  "Pressure Department": labPrecision,
  "Fluid Flow Department": labFluidFlow,
  "Thermal Department": labCalibration,
  "Lab Instruments": labInstruments,
  "Mass & Volume Department": labMassVolume,
};

interface DepartmentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  instruments: string[];
  color: string;
  accentColor: string;
  index: number;
  link?: string;
}

export const DepartmentCard = ({
  title,
  description,
  icon: Icon,
  instruments,
  color,
  accentColor,
  index,
  link,
}: DepartmentCardProps) => {
  const isEven = index % 2 === 0;
  const image = departmentImages[title];

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="group"
    >
      <div className={cn(
        "relative rounded-3xl overflow-hidden",
        "bg-gradient-to-br border border-border/50",
        "hover:border-primary/30 hover:shadow-elevated transition-all duration-500",
        color
      )}>
        <div className="absolute inset-0 bg-card/90 backdrop-blur-sm" />
        <div className={cn(
          "absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl",
          accentColor
        )} />

        <div className="relative">
          {/* Image Banner */}
          {image && (
            <div className="relative h-48 lg:h-56 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <div className="absolute bottom-4 left-8 flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg", accentColor)}
                >
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/70 backdrop-blur-sm border border-border/50 text-xs font-medium text-muted-foreground">
                  <span>{instruments.length} instruments</span>
                </div>
              </div>
            </div>
          )}

          <div className="p-8 lg:p-10">
            {!image && (
              <div className="flex items-start justify-between mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg", accentColor)}
                >
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/50 border border-border/50 text-xs font-medium text-muted-foreground">
                  <span>{instruments.length} instruments</span>
                </div>
              </div>
            )}

            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
              {instruments.slice(0, 9).map((instrument, i) => (
                <motion.div
                  key={instrument}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.03 }}
                  className="flex items-center gap-2 text-sm text-foreground/80 p-2 rounded-lg bg-background/30 hover:bg-background/50 transition-colors"
                >
                  <div className={cn("w-1.5 h-1.5 rounded-full", accentColor)} />
                  <span className="truncate">{instrument}</span>
                </motion.div>
              ))}
              {instruments.length > 9 && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground p-2 rounded-lg bg-background/30">
                  <span>+{instruments.length - 9} more</span>
                </div>
              )}
            </div>

            {link ? (
              <Button
                variant="outline"
                className="group/btn w-full sm:w-auto border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                asChild
              >
                <Link to={link}>
                  View Department
                  <motion.span className="ml-2" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ChevronRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </Button>
            ) : (
              <Button variant="outline" className="group/btn w-full sm:w-auto border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                Explore Services
                <motion.span className="ml-2" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ChevronRight className="w-4 h-4" />
                </motion.span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
