import { useCart } from "@/contexts";
import { ShoppingCart } from "lucide-react";

const FloatingButton = () => {
  const { totalItems, setIsOpen } = useCart();

  if (totalItems === 0) return null;

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3.5 bg-primary text-primary-foreground font-body font-bold rounded-full shadow-[var(--warm-shadow-lg)] hover:opacity-90 transition-all animate-fade-in-up"
      aria-label="Ver carrito de pedidos"
    >
      <ShoppingCart className="w-5 h-5" />
      <span className="text-sm">{totalItems} {totalItems === 1 ? "item" : "items"}</span>
    </button>
  );
};

export default FloatingButton;
