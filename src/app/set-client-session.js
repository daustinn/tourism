'use client'

import { useAuth } from 'stores/auth.store'

export const SetClientSession = ({ session }) => {
  const seSesion = useAuth((state) => state.setSession)
  seSesion(session)
  return null
}
