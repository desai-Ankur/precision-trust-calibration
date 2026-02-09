import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Linkedin } from "lucide-react";

const team = [
  { name: "Rajesh Sharma", role: "Managing Director", initials: "RS", bio: "25+ years in metrology and quality management. Leads IQCL's strategic vision." },
  { name: "Priya Desai", role: "Head of Operations", initials: "PD", bio: "Expert in calibration lab operations and ISO compliance frameworks." },
  { name: "Amit Kulkarni", role: "Chief Metrologist", initials: "AK", bio: "Specialist in mechanical and dimensional calibration with 20 years of experience." },
  { name: "Sneha Patil", role: "Quality Manager", initials: "SP", bio: "Ensures all calibrations meet NABL standards and customer requirements." },
];

export const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [rm, setRm] = useState(false);
  useEffect(() => { setRm(window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          {...(rm ? {} : { initial: { opacity: 0, y: 20 }, animate: inView ? { opacity: 1, y: 0 } : {} })}
          transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-accent uppercase">
            <span className="w-8 h-px bg-accent" />Our Team<span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Meet the <span className="text-gradient">Experts</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="group glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 overflow-hidden"
              {...(rm ? {} : {
                initial: { opacity: 0, y: 20 },
                animate: inView ? { opacity: 1, y: 0 } : {},
                whileHover: { y: -6, transition: { duration: 0.2 } },
              })}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="font-display text-xl font-bold text-primary-foreground">{member.initials}</span>
              </div>
              <h3 className="font-display font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-accent font-medium mt-1">{member.role}</p>
              {/* Bio - revealed on hover */}
              <div className="mt-3 max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-in-out">
                <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
