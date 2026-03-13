import { Building2, Map, FileText, Globe, Home } from "lucide-react";

const serviceCategories = [
  {
    icon: Building2,
    title: "Engineering Services",
    items: ["Building Plan", "Single Layout / Multi Layout Plan", "Estimations", "3D Designs", "Construction Supervising", "Structural Designs", "Nirmaan-2 Online Submission", "Layout Supervising"],
  },
  {
    icon: Map,
    title: "Land Survey",
    items: ["Digital Survey", "11E / Plotting", "Site Boundary Marking"],
  },
  {
    icon: FileText,
    title: "Document Services",
    items: ["Conversion", "Single / Multi Layouts", "E Khata", "9-11A / 11B", "Building Licence", "Occupancy Certificate", "Door Number", "Electrical NOC", "KEB Name Change", "RTC Name Change", "Labour NOC", "Trade Licence", "All Types of NOC", "Health NOC"],
  },
  {
    icon: Globe,
    title: "Online Services",
    items: ["Labour Registration", "EC / Certified Documents", "RTC / MR", "Tax", "LBS Registration", "Other Online Related Services"],
  },
  {
    icon: Home,
    title: "Real Estate Services",
    items: ["Buying Land", "Selling Property", "House Buying Assistance", "Land Investment Consulting"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 gold-text">Our Services</h2>
        <div className="gold-line w-20 mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-primary">{cat.title}</h3>
              </div>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-foreground/70 text-sm">
                    <span className="text-primary mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
