import { create } from "zustand";

interface FilterStoreState {
  filterString: string;
  type:string;
}

interface FilterStoreActions {
  setFilterString: (data: string) => void;
  setType: (data: string) => void;
}

const useFilterStore = create<FilterStoreState & FilterStoreActions>((set) => ({
  filterString: "",
  type:"",
  setFilterString: (data) => set({ filterString: data }),
  setType: (data) => set({ type: data }),
}));

export default useFilterStore;
