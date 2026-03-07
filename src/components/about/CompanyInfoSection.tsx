import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Briefcase, Factory, IndianRupee, FileText, Users, Target } from "lucide-react";

const infoCards = [
  {
    icon: Briefcase,
    title: "Leadership",
    items: [
      "Company CEO: Sanjay Patel",
      "Total Employees: Up to 10 People",
      "Legal Status: Partnership Firm",
    ],
  },
  {
    icon: Factory,
    title: "Nature of Business",
    items: [
      "Primary: Service Provider",
      "Works Contract",
      "Export Services",
      "Supplier of Services",
      "Wholesale & Retail Business",
    ],
  },
  {
    icon: IndianRupee,
    title: "Financial Profile",
    items: [
      "Annual Turnover: ₹40 Lakhs - ₹1.5 Crores",
      "Banker: KOTAK MAHINDRA BANK",
      "GST Registration: 25-04-2024",
    ],
  },
  {
    icon: FileText,
    title: "Statutory Information",
    items: [
      "GST No: 24AAKFI4315G1ZM",
      "CIN No: ACE-3102",
      "Location: Ahmedabad, Gujarat, India",
    ],
  },
  {
    icon: Users,
    title: "GST Partners",
    items: [
      "Snehalben Sanjaybhai Patel",
      "Bhagvatiben Mathurdas Patel",
      "Kaminiben Manilal Patel",
    ],
  },
  {
    icon: Target,
    title: "Our Services",
    items: [
      "Calibration Services",
      "Repairing Services",
      "Rental Services",
      "Quality Assurance",
      "Compliance Consulting",
    ],
  },
];

export const CompanyInfoSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [rm, setRm] = useState(false);
  useEffect(() => { setRm(window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);

  return (
    <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          {...(rm ? {} : { initial: { opacity: 0, y: 20 }, animate: inView ? { opacity: 1, y: 0 } : {} })}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-accent uppercase">
            <span className="w-8 h-px bg-accent" />Company Information<span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            About <span className="text-gradient">Our Organization</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive details about our organization, leadership, and business operations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              {...(rm ? {} : {
                initial: { opacity: 0, y: 20 },
                animate: inView ? { opacity: 1, y: 0 } : {},
                whileHover: { y: -4, transition: { duration: 0.2 } },
              })}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">{card.title}</h3>
              <ul className="space-y-2">
                {card.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground leading-relaxed">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
