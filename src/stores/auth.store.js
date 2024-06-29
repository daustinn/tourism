import { create } from 'zustand'

const StoreApi = (set) => ({
  session: null,
  setSession: (session) => set(() => ({ session })),
  updateSession: (session) =>
    set((state) => ({ session: { ...state.session, ...session } }))
})

export const useAuth = create(StoreApi)
