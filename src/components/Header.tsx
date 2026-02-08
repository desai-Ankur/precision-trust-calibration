import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/#industries" },
  { label: "Accreditations", href: "/#accreditations" },
  { label: "Contact", href: "/#contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft group-hover:shadow-elevated transition-shadow duration-300">
              <span className="text-primary-foreground font-display font-bold text-lg">IQ</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight text-foreground">IQCL</span>
              <span className="text-[10px] text-muted-foreground leading-tight tracking-wide">Calibration LLP</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isExternal = item.href.startsWith("/#");
              const isActive = location.pathname === item.href || 
                (item.href === "/services" && location.pathname.startsWith("/services"));
              
              return isExternal ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-secondary/50 ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-secondary/50 ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/#contact">Get Quote</Link>
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navItems.map((item) => {
                const isExternal = item.href.startsWith("/#");
                return isExternal ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-foreground font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-foreground font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4 flex flex-col gap-3">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/#contact" onClick={() => setIsOpen(false)}>Get Quote</Link>
                </Button>
                <Button variant="default" className="w-full" asChild>
                  <Link to="/services" onClick={() => setIsOpen(false)}>View Services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
