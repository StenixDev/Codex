import { create } from 'zustand';

type AppStoreProps = {
  user: null | string;
  login: (user: null | string) => void;
  logout: () => void;
  theme: string;
  toggleTheme: () => void;
};

export const useAppStore = create<AppStoreProps>()((set) => ({
  // Auth Slice
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),

  // UI Slice
  theme: 'light',
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));
