import { Plus } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/contexts";

const ProductsSection = () => {
  const { addItem } = useCart();

  return (
    <section id="productos" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">Nuestros Productos</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Hechas con amor artesanal
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-xl overflow-hidden shadow-[var(--warm-shadow)] hover:shadow-[var(--warm-shadow-lg)] transition-shadow duration-300"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <span className="text-xs font-body font-bold uppercase tracking-wider text-secondary">
                  {product.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-primary">
                    ${product.price.toLocaleString("es-AR")}
                  </span>
                  <button
                    onClick={() => addItem(product)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-body text-sm font-bold rounded-lg hover:opacity-90 transition-opacity"
                    aria-label={`Agregar ${product.name} al carrito`}
                  >
                    <Plus className="w-4 h-4" />
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
