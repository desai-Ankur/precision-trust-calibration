import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const milestones = [
  { year: "1983", title: "Foundation", description: "IQCL Instrument Quality Calibration LLP established in Gujarat with a vision to deliver precision calibration services to Indian industries." },
  { year: "1995", title: "Industry Recognition", description: "Became a trusted calibration partner for manufacturing and pharmaceutical sectors across Gujarat and Western India." },
  { year: "2005", title: "Multi-Department Expansion", description: "Expanded services across Mechanical, Electro-Tech, Pressure, Thermal, and Fluid Flow calibration departments." },
  { year: "2015", title: "NABL Accreditation", description: "Achieved NABL accreditation under ISO/IEC 17025:2017, cementing our credibility in the calibration industry." },
  { year: "2020", title: "500+ Clients Milestone", description: "Crossed 500 active clients across manufacturing, pharma, automotive, and aerospace sectors with digital transformation." },
  { year: "2024", title: "7 Departments Strong", description: "Now operating 7 specialized departments with 50,000+ calibrations completed, serving industries across India." },
];

export const JourneyTimelineSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [rm, setRm] = useState(false);
  useEffect(() => { setRm(window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);

  return (
    <section id="journey" className="py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          {...(rm ? {} : { initial: { opacity: 0, y: 20 }, animate: inView ? { opacity: 1, y: 0 } : {} })}
          transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-accent uppercase">
            <span className="w-8 h-px bg-accent" />Our Journey<span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Milestones That <span className="text-gradient">Define Us</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={m.year}
                className={`relative flex items-start mb-12 last:mb-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                {...(rm ? {} : { initial: { opacity: 0, x: isLeft ? -30 : 30 }, animate: inView ? { opacity: 1, x: 0 } : {} })}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 mt-1" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <div className="glass-card rounded-2xl p-6 hover:shadow-card transition-shadow duration-300">
                    <span className="font-display text-2xl font-bold text-primary">{m.year}</span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-1">{m.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
