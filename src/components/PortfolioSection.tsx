import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const images = [
  { src: portfolio1, label: "3D House Design" },
  { src: portfolio2, label: "Land Survey Work" },
  { src: portfolio3, label: "Building Plans" },
  { src: portfolio4, label: "Completed Project" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 gold-text">Our Work</h2>
        <div className="gold-line w-20 mx-auto mb-12 rounded-full" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img.label} className="group relative overflow-hidden rounded-lg border border-border">
              <img src={img.src} alt={img.label} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-primary font-display font-semibold">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
