import { create } from 'zustand'

const useStore = create((set) => ({
  event: {},
  updateEvent: (data) => set((state) => ({ event: data })),
}))

export default useStore;