import { Phone, Mail } from "lucide-react";
import ssvLogo from "@/assets/ssv-logo.jpeg";

const Footer = () => {
  const services = ["Engineering", "Land Survey", "Property Documentation", "Online Services", "Real Estate"];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={ssvLogo} alt="SSV Creations" className="w-10 h-10 rounded-full" />
              <div>
                <span className="font-display font-bold gold-text">SSV Creations</span>
                <p className="text-muted-foreground text-xs">Engineering & Property Solutions</p>
              </div>
            </div>
            <p className="text-foreground/60 text-sm">Professional civil engineering and property consulting services.</p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}><a href="#services" className="text-foreground/60 hover:text-primary text-sm transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+919164192917" className="flex items-center gap-2 text-foreground/60 hover:text-primary text-sm transition-colors">
                <Phone className="w-4 h-4" /> +91 91641 92917
              </a>
              <a href="mailto:ssvcreations0426@gmail.com" className="flex items-center gap-2 text-foreground/60 hover:text-primary text-sm transition-colors">
                <Mail className="w-4 h-4" /> ssvcreations0426@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="gold-line w-full mb-6 opacity-30" />
        <p className="text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} SSV Creations. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
