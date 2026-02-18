import React, { useEffect, useMemo, useState } from "react";
import {
  CartContext,
  type CartContextType,
  type CartItem,
  type CartProduct,
} from "./CartContextDef";

const STORAGE_KEY = "rustico_y_casero_cart_v1";

function clampQty(q: number) {
  if (!Number.isFinite(q)) return 1;
  return Math.max(0, Math.floor(q));
}

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null;
}

function isCartProduct(v: unknown): v is CartProduct {
  if (!isRecord(v)) return false;
  const id = v.id;
  return (
    (typeof id === "string" || typeof id === "number") &&
    typeof v.name === "string" &&
    typeof v.price === "number"
  );
}

function isCartItem(v: unknown): v is { product: CartProduct; quantity: number } {
  if (!isRecord(v)) return false;
  return isCartProduct(v.product) && typeof v.quantity === "number";
}

function loadCart(): CartItem[] {
  if (!canUseStorage()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter(isCartItem)
      .map((it) => ({
        product: it.product,
        quantity: clampQty(it.quantity),
      }))
      .filter((it) => it.quantity > 0);
  } catch {
    return [];
  }
}

function sameId(a: string | number, b: string | number) {
  return String(a) === String(b);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => loadCart());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!canUseStorage()) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // no rompemos la app
    }
  }, [items]);

  const addItem: CartContextType["addItem"] = (product, quantity = 1) => {
    const qty = clampQty(quantity);
    if (qty <= 0) return;

    setItems((prev) => {
      const idx = prev.findIndex((it) => sameId(it.product.id, product.id));
      if (idx === -1) return [...prev, { product, quantity: qty }];

      const copy = [...prev];
      copy[idx] = { ...copy[idx], quantity: clampQty(copy[idx].quantity + qty) };
      return copy;
    });

    setIsOpen(true);
  };

  const removeItem: CartContextType["removeItem"] = (productId) => {
    setItems((prev) => prev.filter((it) => !sameId(it.product.id, productId)));
  };

  const updateQuantity: CartContextType["updateQuantity"] = (productId, quantity) => {
    const qty = clampQty(quantity);

    setItems((prev) => {
      if (qty <= 0) return prev.filter((it) => !sameId(it.product.id, productId));
      return prev.map((it) =>
        sameId(it.product.id, productId) ? { ...it, quantity: qty } : it
      );
    });
  };

  const clearCart: CartContextType["clearCart"] = () => setItems([]);

  const totalItems = useMemo(
    () => items.reduce((acc, it) => acc + it.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((acc, it) => acc + it.quantity * it.product.price, 0),
    [items]
  );

  const value: CartContextType = useMemo(
    () => ({
      items,
      totalItems,
      totalPrice,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      isOpen,
      setIsOpen,
    }),
    [items, totalItems, totalPrice, isOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
