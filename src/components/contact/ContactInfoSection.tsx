import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["4th Floor, Shop 416, Maruti Plaza", "Krishna Nagar Road, Ahmedabad-382345", "Gujarat, India"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    lines: ["Office: 9824040548", "Director: 9925015461", "Technical: 7600505240"],
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["info@iqcl.in", "calibration@iqcl.in"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"],
  },
];

export const ContactInfoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-accent uppercase mb-3">
            <span className="w-8 h-px bg-accent" />
            Reach Us
            <span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">How to Reach Us</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{card.title}</h3>
              {card.lines.map((line) => (
                <p key={line} className="text-sm text-muted-foreground leading-relaxed">{line}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
