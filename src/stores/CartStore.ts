import { IProduct } from "@/interfaces/IProduct";
import { create } from "zustand";

interface cartStoreState {
  cartItems: IProduct[];
}

interface cartStoreActions {
  setCartItems: (data: IProduct[]) => void;
}

const useCartStore = create<cartStoreState & cartStoreActions>((set) => ({
  cartItems: [],
  setCartItems: (data) => set({ cartItems: data }),
}));

export default useCartStore;
