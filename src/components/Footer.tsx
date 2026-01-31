import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react";

const footerLinks = {
  services: [
    { label: "Instrument Calibration", href: "#services" },
    { label: "On-site Calibration", href: "#services" },
    { label: "Testing & Analysis", href: "#services" },
    { label: "Certificate Issuance", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#about" },
    { label: "Accreditations", href: "#accreditations" },
    { label: "Careers", href: "#" },
  ],
  industries: [
    { label: "Manufacturing", href: "#industries" },
    { label: "Automotive", href: "#industries" },
    { label: "Pharmaceuticals", href: "#industries" },
    { label: "Engineering", href: "#industries" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <span className="font-display font-bold text-xl text-accent-foreground">IQ</span>
              </div>
              <div>
                <div className="font-display font-bold text-xl">IQCL</div>
                <div className="text-xs text-primary-foreground/60">Instrument Quality Calibration LLP</div>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm max-w-xs">
              Premier calibration laboratory accredited with ISO/IEC 17025:2017. 
              Delivering precision and quality since 2008.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 22 1234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@iqcl.in</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-display font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} IQCL - Instrument Quality Calibration LLP. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
