import { create } from "zustand";

const useUser = create((set) => {
  return {
    user: {},
    updateUser: (data) => set(() => ({ user: data })),
  };
});

export default useUser;
