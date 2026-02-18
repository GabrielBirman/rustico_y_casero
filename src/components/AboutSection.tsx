const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-accent/50">
      <div className="container max-w-3xl text-center">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">Nuestra Historia</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
          Tradición y sabor en cada masa
        </h2>
        <div className="space-y-5 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            En <strong className="text-foreground">Rústico y Casero</strong> creemos que las mejores cosas se hacen con las manos y el corazón. 
            Cada prepizza que preparamos lleva ingredientes seleccionados y una masa elaborada artesanalmente, 
            siguiendo la receta que nos enseñaron en casa.
          </p>
          <p>
            Nuestro compromiso es ofrecerte un producto fresco, honesto y de calidad, 
            para que puedas disfrutar en familia o sorprender en tus eventos con el sabor de lo auténtico.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
