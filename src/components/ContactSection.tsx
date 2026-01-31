import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  ArrowRight
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "IQCL Laboratory, Industrial Area, Mumbai, Maharashtra, India",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 22 1234 5678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@iqcl.in",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-accent uppercase">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Request a Calibration Quote
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to ensure your instruments meet the highest standards? 
            Contact us for a free consultation and quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium text-foreground">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="p-6 rounded-2xl bg-gradient-primary">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-4">
                Need Urgent Calibration?
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Call us directly for express calibration services with priority handling.
              </p>
              <Button variant="secondary" asChild>
                <a href="tel:+912212345678" className="inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Company Name</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="Your Company Ltd."
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message / Requirements</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                  placeholder="Describe your calibration requirements, instruments list, or any specific queries..."
                  required
                />
              </div>

              <Button type="submit" variant="default" size="lg" className="w-full sm:w-auto">
                Send Message
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
