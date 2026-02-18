import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Mayorista", href: "#mayorista" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#inicio" className="font-display text-xl font-bold text-primary tracking-wide">
          Rústico y Casero
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Cart + Mobile menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Ver carrito"
          >
            <ShoppingCart className="w-5 h-5 text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-body text-foreground/80 hover:text-primary py-2 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
