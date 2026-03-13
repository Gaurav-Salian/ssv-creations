import { CheckCircle } from "lucide-react";

const points = [
  "Professional Civil Engineering Expertise",
  "Accurate Land Survey Solutions",
  "Complete Property Documentation Support",
  "Reliable Real Estate Assistance",
  "Fast and Transparent Services",
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gold-text">Why Choose Us</h2>
        <div className="gold-line w-20 mx-auto mb-10 rounded-full" />
        <div className="space-y-4">
          {points.map((p) => (
            <div key={p} className="flex items-center gap-3 bg-card rounded-lg px-6 py-4 border border-border">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground/80">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
