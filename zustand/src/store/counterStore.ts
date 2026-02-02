import { create } from 'zustand';

type Store = {
  count: number;
  inc: () => void;
  dec: () => void;
  reset: () => void;
};

export const useCounterStore = create<Store>()((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () =>
    set((state) => (state.count <= 1 ? state : { count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
