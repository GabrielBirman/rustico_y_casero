import { createContext } from "react";

export type CartProduct = {
  id: string | number;
  name: string;
  price: number;
  category?: string;
  image?: string;
  description?: string;
};

export type CartItem = {
  product: CartProduct;
  quantity: number;
};

export type CartContextType = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;

  addItem: (product: CartProduct, quantity?: number) => void;
  removeItem: (productId: string | number) => void;
  updateQuantity: (productId: string | number, quantity: number) => void;
  clearCart: () => void;

  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);
