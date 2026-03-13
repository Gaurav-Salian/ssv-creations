const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gold-text">About Us</h2>
        <div className="gold-line w-20 mx-auto mb-8 rounded-full" />
        <p className="text-foreground/80 text-lg leading-relaxed">
          SSV Creations is a trusted civil engineering and property consulting service provider. 
          We specialize in building plans, structural design, land survey, property documentation, 
          and real estate services. Our mission is to provide reliable, accurate, and professional 
          solutions for land and construction related needs.
        </p>
        <p className="text-primary font-display text-xl italic mt-6">
          "Dreams. Documents. Done."
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
