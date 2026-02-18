import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts";
import { useState } from "react";

const WHATSAPP_NUMBER = "5491100000000"; // Reemplazar con número real

const Cart = () => {
  const { items, updateQuantity, removeItem, clearCart, totalPrice, isOpen, setIsOpen } = useCart();
  const [form, setForm] = useState({ name: "", address: "", phone: "" });
  const [showForm, setShowForm] = useState(false);

  if (!isOpen) return null;

  const handleSubmitOrder = () => {
    // Build WhatsApp message
    const itemLines = items
      .map((i) => `• ${i.product.name} x${i.quantity} — $${(i.product.price * i.quantity).toLocaleString("es-AR")}`)
      .join("\n");

    const message = `🍕 *Nuevo Pedido — Rústico y Casero*\n\n${itemLines}\n\n*Total: $${totalPrice.toLocaleString("es-AR")}*\n\n👤 *Nombre:* ${form.name}\n📍 *Dirección:* ${form.address}\n📞 *Teléfono:* ${form.phone}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    clearCart();
    setIsOpen(false);
    setShowForm(false);
    setForm({ name: "", address: "", phone: "" });
  };

  const formValid = form.name.trim() && form.address.trim() && form.phone.trim();

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-foreground/40 z-50 animate-fade-in" onClick={() => setIsOpen(false)} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-50 shadow-2xl flex flex-col animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="font-display text-xl font-bold text-foreground">Tu Pedido</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-accent rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground font-body py-10">Tu carrito está vacío</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4 items-center bg-card rounded-lg p-3">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-body font-bold text-sm text-foreground truncate">{item.product.name}</h4>
                    <p className="font-body text-sm text-primary font-bold">
                      ${(item.product.price * item.quantity).toLocaleString("es-AR")}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center rounded bg-muted hover:bg-accent transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-body text-sm font-bold w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center rounded bg-muted hover:bg-accent transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Order form */}
          {showForm && items.length > 0 && (
            <div className="mt-6 space-y-3">
              <input
                type="text"
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                maxLength={100}
              />
              <input
                type="text"
                placeholder="Dirección de entrega"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                maxLength={200}
              />
              <input
                type="tel"
                placeholder="Teléfono"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                maxLength={20}
              />
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-4 border-t border-border space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-body font-bold text-foreground">Total</span>
              <span className="font-display text-2xl font-bold text-primary">
                ${totalPrice.toLocaleString("es-AR")}
              </span>
            </div>
            {!showForm ? (
              <button
                onClick={() => setShowForm(true)}
                className="w-full py-3.5 bg-primary text-primary-foreground font-body font-bold rounded-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
              >
                Confirmar Pedido
              </button>
            ) : (
              <button
                onClick={handleSubmitOrder}
                disabled={!formValid}
                className="w-full py-3.5 bg-secondary text-secondary-foreground font-body font-bold rounded-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar por WhatsApp
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
