'use client'

import axios from 'axios'
import { Heart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useAuth } from 'stores/auth.store'

export const ButtonFavorite = ({ place }) => {
  const session = useAuth((s) => s.session)
  const router = useRouter()
  const updateSession = useAuth((s) => s.updateSession)
  const added = session?.favorite_places?.includes(place.id)

  const favorite_places = session?.favorite_places ?? []

  const addOrRemoveFavorite = async () => {
    if (!session) return router.push('/login')

    updateSession({
      ...session,
      favorite_places: added
        ? favorite_places.filter((p) => p !== place.id)
        : [...favorite_places, place.id]
    })

    try {
      await axios.post(`/api/place/${place.id}/toggle-favorite`)
    } catch (error) {
      // rollback
      updateSession({
        ...session,
        favorite_places: added
          ? [...favorite_places, place.id]
          : favorite_places.filter((p) => p !== place.id)
      })
    }
  }

  return (
    <button
      onClick={addOrRemoveFavorite}
      title="Agregar a favoritos"
      role="button"
      data-testid="heart-button"
      className="absolute z-10 hover:scale-110 transition-all top-4 right-4 text-white"
    >
      <Heart
        aria-selected={added}
        size={25}
        className="fill-black/50 aria-selected:fill-rose-600"
      />
    </button>
  )
}
