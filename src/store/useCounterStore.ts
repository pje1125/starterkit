import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CounterState {
  count: number;
  increment: () => void;
  reset: () => void;
}

// 예시 스토어: persist 덕분에 새로고침해도 값이 localStorage에 유지됨
export const useCounterStore = create<CounterState>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((s) => ({ count: s.count + 1 })),
      reset: () => set({ count: 0 }),
    }),
    { name: 'counter-store' },
  ),
);
