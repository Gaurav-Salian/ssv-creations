import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import heroBg4 from "@/assets/hero-bg-4.jpg";
import heroBg6 from "@/assets/hero-bg-6.jpg";
import ssvLogo from "@/assets/ssv-logo.jpeg";

const images = [heroBg, heroBg2, heroBg3, heroBg4, heroBg6];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="SSV Creations background"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        />
      ))}
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <img src={ssvLogo} alt="SSV Creations" className="w-28 h-28 rounded-full mx-auto mb-6 border-2 border-primary shadow-lg" style={{ boxShadow: "var(--shadow-gold)" }} />
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 gold-text">
          SSV Creations
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-2 font-body">
          Consulting Civil Engineer & Property Document Consultant
        </p>
        <p className="text-base md:text-lg text-foreground/60 mb-2 max-w-2xl mx-auto">
          Engineering Solutions & Property Documentation Made Easy
        </p>
        <p className="text-sm md:text-base text-primary/80 italic mb-8 font-body tracking-wide">
          Where Your Needs Come First
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services" className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            Our Services
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
