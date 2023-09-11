import { create } from "zustand";

const useProducts = create((set) => {
  return {
    products: [],
    mode: "all",
    loading: false,
    updateProducts: (data) => set(() => ({ products: data })),
    updateMode: (dataMode) => set(() => ({ mode: dataMode })),
    setLoading: (data) => set(() => ({ loading: data })),
  };
});

export default useProducts;
