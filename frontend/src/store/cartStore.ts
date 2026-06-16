import { create } from "zustand";

type Product = {
  id: string;
  name: string;
  price: number;
};

type CartState = {
  items: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: JSON.parse(localStorage.getItem("cart") || "[]"),

  addToCart: (item) =>
    set((state) => {
      const updated = [...state.items, item];
      localStorage.setItem("cart", JSON.stringify(updated));
      return { items: updated };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updated = state.items.filter((i) => i.id !== id);
      localStorage.setItem("cart", JSON.stringify(updated));
      return { items: updated };
    }),

  clearCart: () =>
    set(() => {
      localStorage.removeItem("cart");
      return { items: [] };
    })
}));