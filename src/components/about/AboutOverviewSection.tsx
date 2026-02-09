import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Factory, FlaskConical, Gauge, Cpu } from "lucide-react";

const tabs = [
  { value: "calibration", label: "Calibration", icon: Gauge, content: "IQCL specializes in precision calibration across mechanical, electro-technical, thermal, pressure, and fluid flow disciplines. Every instrument is calibrated against traceable national/international standards." },
  { value: "testing", label: "Testing", icon: FlaskConical, content: "Our testing laboratory performs comprehensive quality analysis to ensure your instruments meet regulatory and operational standards with full compliance documentation." },
  { value: "industrial", label: "Industrial Solutions", icon: Factory, content: "From manufacturing floors to pharmaceutical labs, we deliver on-site and in-house calibration solutions tailored to your industry's specific requirements." },
  { value: "technology", label: "Technology", icon: Cpu, content: "We leverage advanced metrology systems, digital calibration workflows, and automated reporting to deliver faster turnaround with uncompromised accuracy." },
];

const useCounter = (end: number, duration: number, inView: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - startTime) / (duration * 1000), 1);
      setCount(Math.floor(p * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, inView]);
  return count;
};

export const AboutOverviewSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [rm, setRm] = useState(false);
  useEffect(() => { setRm(window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);

  const years = useCounter(15, 2, inView);
  const clients = useCounter(500, 2.5, inView);
  const calibrations = useCounter(50, 2, inView);

  const a = (p: object) => rm ? {} : p;

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div className="space-y-8" {...a({ initial: { opacity: 0, x: -30 }, animate: inView ? { opacity: 1, x: 0 } : {} })} transition={{ duration: 0.7 }}>
            <div className="space-y-4">
              <motion.span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-accent uppercase"
                {...a({ initial: { opacity: 0 }, animate: inView ? { opacity: 1 } : {} })} transition={{ delay: 0.1 }}>
                <span className="w-8 h-px bg-accent" />Company Overview
              </motion.span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Who is <span className="text-gradient">IQCL</span>?
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Instrument Quality Calibration LLP is a premier calibration laboratory headquartered in India. 
              Accredited by NABL under ISO/IEC 17025:2017, we serve manufacturing, automotive, pharmaceutical, 
              aerospace, and engineering sectors with precision calibration across 7 departments.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
              {[
                { val: rm ? 15 : years, suffix: "+", label: "Years" },
                { val: rm ? 500 : clients, suffix: "+", label: "Clients" },
                { val: rm ? 50 : calibrations, suffix: "K+", label: "Calibrations" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-primary">{s.val}{s.suffix}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Tabs */}
          <motion.div {...a({ initial: { opacity: 0, x: 30 }, animate: inView ? { opacity: 1, x: 0 } : {} })} transition={{ duration: 0.7, delay: 0.2 }}>
            <Tabs defaultValue="calibration" className="space-y-6">
              <TabsList className="grid grid-cols-2 sm:grid-cols-4 h-auto gap-2 bg-transparent p-0">
                {tabs.map((t) => (
                  <TabsTrigger key={t.value} value={t.value} className="flex flex-col gap-1 py-3 px-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl border border-border data-[state=active]:border-primary transition-all">
                    <t.icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{t.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              {tabs.map((t) => (
                <TabsContent key={t.value} value={t.value}>
                  <div className="glass-card rounded-2xl p-8 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <t.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{t.label}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t.content}</p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
