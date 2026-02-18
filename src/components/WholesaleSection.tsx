import { Users, PartyPopper, Truck } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Venta Mayorista",
    description: "Precios especiales para comercios, almacenes y revendedores. Consultá por volúmenes.",
  },
  {
    icon: PartyPopper,
    title: "Pizza Party",
    description: "Servicio completo de pizza party para cumpleaños, casamientos y eventos corporativos.",
  },
  {
    icon: Users,
    title: "Catering",
    description: "Armamos combos a medida para tu evento. Nos encargamos de todo para que vos disfrutes.",
  },
];

const WholesaleSection = () => {
  return (
    <section id="mayorista" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">Servicios</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Mayorista & Catering
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-8 rounded-xl bg-card shadow-[var(--warm-shadow)] hover:shadow-[var(--warm-shadow-lg)] transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WholesaleSection;
