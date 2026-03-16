
import logo from "@/assets/RUSTICO Y CASERO LOGO.png";
import anaCocina from "@/assets/ana-cocina.jpg";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-accent/50">
      <div className="container flex flex-col items-center">
        {/* Logo eliminado, ahora está en WholesaleSection */}
        {/* Contenido y foto */}
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-center gap-10">
          {/* Texto a la izquierda */}
          <div className="md:w-1/2 md:text-left text-center flex flex-col justify-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
              Nuestra Historia<br/>
              <span className="text-lg md:text-2xl font-normal block mt-2">Tradición y sabor en cada masa, mas de 7 años de experiencia</span>
            </h2>
            <div className="space-y-5 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              <div className="space-y-5 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
  <p>
    Desde el corazón de <strong className="text-foreground">Ciudadela</strong>, En 2019 Ana decidió emprender este proyecto
    por su cuenta, con coraje y mucha constancia. Lo que empezó como un desafío personal de autosuperación,
    hoy es <strong className="text-foreground">Rústico y Casero</strong>: un camino construido a fuerza de trabajo,
    amor por lo artesanal y ganas de salir adelante.
  </p>

  <p>
    En <strong className="text-foreground">Rústico y Casero</strong> creemos que las mejores cosas se hacen con las
    manos y el corazón. Cada prepizza que preparamos lleva ingredientes seleccionados y una masa elaborada
    artesanalmente, siguiendo la receta italiana que nos enseñaron en casa.
  </p>

  <p>
    Nuestro compromiso es ofrecerte un producto fresco, honesto y de calidad, para que puedas disfrutar en
    familia o sorprender en tus eventos con el sabor de lo auténtico.
  </p>
  <p>
    Desde entonces la gente sigue eligiéndonos por nuestro sabor casero, la calidad de nuestros productos y el servicio personalizado. Nos enorgullece ser parte de tu mesa y de tus momentos especiales.
  </p>
</div>

            </div>
          </div>
          {/* Foto a la derecha */}
          <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
<figure className="flex flex-col items-center gap-2">
  <img
    src={anaCocina}
    alt="Ana cocinando"
    className="w-72 h-72 md:w-[420px] md:h-[420px] object-cover rounded-3xl shadow-lg opacity-90"
  />
<figcaption className="text-base italic text-muted-foreground">
    "Ana, la fundadora y lider de Rústico y Casero."
  </figcaption>
</figure>          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
