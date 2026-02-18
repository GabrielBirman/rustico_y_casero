import prepizzaTomate from "@/assets/prepizza-tomate.jpg";
import prepizzaCebolla from "@/assets/prepizza-cebolla.jpg";
import pizzetas from "@/assets/pizzetas.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "prepizza-tomate",
    name: "Prepizza de Tomate",
    description: "Nuestra clásica base artesanal con salsa de tomate casera, lista para que le agregues tus ingredientes favoritos.",
    price: 1200,
    image: prepizzaTomate,
    category: "Prepizzas",
  },
  {
    id: "prepizza-cebolla",
    name: "Prepizza de Cebolla",
    description: "Base artesanal con cebolla caramelizada y salsa de tomate. Un sabor único y casero.",
    price: 1400,
    image: prepizzaCebolla,
    category: "Prepizzas",
  },
  {
    id: "pizzetas",
    name: "Pizzetas (x6)",
    description: "Pack de 6 pizzetas individuales con salsa de tomate. Perfectas para eventos y meriendas.",
    price: 1800,
    image: pizzetas,
    category: "Pizzetas",
  },
];
