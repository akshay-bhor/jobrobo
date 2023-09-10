import { create } from "zustand";

const useProducts = create((set) => {
  return {
    products: [],
    mode: "all",
    updateProducts: (data) => set(() => ({ products: data })),
    updateMode: (dataMode) => set(() => ({ mode: dataMode }))
  };
});

export default useProducts;
