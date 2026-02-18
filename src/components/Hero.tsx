import heroImage from "@/assets/hero-prepizzas.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Prepizzas artesanales Rústico y Casero"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-primary-foreground/70 mb-4 animate-fade-in">
          Rústico y Casero
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
          Prepizzas de Calidad
        </h1>
        <p className="font-body text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Venta mayorista y servicio de catering de pizza party para fiestas y eventos
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#productos"
            className="px-8 py-3.5 bg-primary text-primary-foreground font-body font-bold rounded-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
          >
            Ver Productos
          </a>
          <a
            href="#contacto"
            className="px-8 py-3.5 border-2 border-primary-foreground/30 text-primary-foreground font-body font-bold rounded-lg hover:bg-primary-foreground/10 transition-colors text-sm uppercase tracking-wider"
          >
            Contactanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
