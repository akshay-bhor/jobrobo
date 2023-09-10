import { create } from "zustand";

const useCategories = create((set) => {
  return {
    categories: [],
    updateCategories: (data) => set(() => ({ categories: data })),
  };
});

export default useCategories;
