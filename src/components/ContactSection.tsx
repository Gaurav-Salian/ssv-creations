import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Name: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919164192917?text=${whatsappMsg}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 gold-text">Contact Us</h2>
        <div className="gold-line w-20 mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold text-primary">Get In Touch</h3>
            <p className="text-foreground/70">Have a project in mind? Reach out to us for a consultation.</p>
            <div className="space-y-4">
              <a href="tel:+919164192917" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" /> +91 91641 92917
              </a>
              <a href="mailto:ssvcreations0426@gmail.com" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary" /> ssvcreations0426@gmail.com
              </a>
              <div className="flex items-start gap-3 text-foreground/80">
                <MapPin className="w-5 h-5 text-primary mt-0.5" /> Karnataka, India
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text" required placeholder="Your Name"
              value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="tel" required placeholder="Phone Number"
              value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <select
              value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
            >
              <option value="">Select Service</option>
              <option>Engineering Services</option>
              <option>Land Survey</option>
              <option>Property Documents</option>
              <option>Online Services</option>
              <option>Real Estate</option>
            </select>
            <textarea
              rows={4} placeholder="Your Message"
              value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button type="submit" className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
