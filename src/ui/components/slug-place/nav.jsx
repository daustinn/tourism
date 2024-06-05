import { Heart } from 'lucide-react'
import { Share } from 'lucide-react'
import React from 'react'

export const NavPlace = ({ place }) => {
  return (
    <header className="pb-4 flex">
      <h1 className="text-2xl flex-grow font-semibold font-sans">
        {place.title}
      </h1>
      <div className="flex items-center gap-2">
        <button className="flex transition-all hover:bg-neutral-200 p-2 rounded-lg items-center text-xs underline underline-offset-2 font-medium gap-1">
          <Share size={20} />
          Compartir
        </button>
        <button className="flex transition-all hover:bg-neutral-200 p-2 rounded-lg items-center text-xs underline underline-offset-2 font-medium gap-1">
          <Heart size={20} />
          Guardar
        </button>
      </div>
    </header>
  )
}
