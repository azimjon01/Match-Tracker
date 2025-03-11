import { create } from "zustand";

interface RefreshState {
  loading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

export const useRefreshStore = create<RefreshState>((set) => ({
  loading: false,
  startLoading: () => set({ loading: true }),
  stopLoading: () => setTimeout(() => set({ loading: false }), 2000),
}));
