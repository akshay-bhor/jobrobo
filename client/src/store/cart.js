import { create } from "zustand";

const useCart = create((set) => {
  return {
    cart: [],
    addToCart: (data) => set((state) => ({ cart: [...state.cart, data] })),
  };
});

export default useCart;
