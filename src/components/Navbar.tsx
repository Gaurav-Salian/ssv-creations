import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import ssvLogo from "@/assets/ssv-logo.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={ssvLogo} alt="SSV Creations Logo" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <span className="font-display text-lg font-bold gold-text">SSV Creations</span>
          </div>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="tel:+919164192917" className="hidden md:flex items-center gap-2 text-primary text-sm font-semibold">
          <Phone className="w-4 h-4" />
          +91 91641 92917
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          <ul className="flex flex-col gap-4 py-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-foreground/80 hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="tel:+919164192917" className="flex items-center gap-2 text-primary font-semibold">
            <Phone className="w-4 h-4" />
            +91 91641 92917
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
