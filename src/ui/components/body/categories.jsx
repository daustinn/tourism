'use client'

import {
  Church,
  RollerCoaster,
  Trees,
  UtensilsCrossed,
  Hotel,
  GalleryHorizontal,
  MapPin,
  BookImage
} from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export function Categories() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const categories = [
    {
      key: 'all',
      traduction: 'Todos',
      icon: <GalleryHorizontal size={20} />
    },
    {
      key: 'churches',
      traduction: 'Iglesias',
      icon: <Church size={20} />
    },
    {
      key: 'museums',
      traduction: 'Museos',
      icon: <RollerCoaster size={20} />
    },
    {
      key: 'parks',
      traduction: 'Parques',
      icon: <Trees size={20} />
    },
    {
      key: 'restaurants',
      traduction: 'Restaurantes',
      icon: <UtensilsCrossed size={20} />
    },
    {
      key: 'hotels',
      traduction: 'Hoteles',
      icon: <Hotel size={20} />
    },
    {
      key: 'places',
      traduction: 'Lugares',
      icon: <MapPin size={20} />
    },
    {
      key: 'events',
      traduction: 'Eventos',
      icon: <BookImage size={20} />
    }
  ]

  const handleClick = (key) => {
    const params = new URLSearchParams(searchParams)
    if (key === 'all') params.delete('category')
    else params.set('category', key)
    void router.replace(`${pathname}/?${params.toString()}`)
  }

  const currentCategory = searchParams.get('category') ?? 'all'

  return (
    <nav role="tablist" className="flex overflow-x-auto gap-2 py-5">
      {categories.map((category) => (
        <button
          onClick={() => handleClick(category.key)}
          role="tab"
          aria-selected={category.key === currentCategory}
          key={category.key}
          className="flex font-medium group aria-selected:text-black text-neutral-600 items-center text-xs flex-col"
        >
          {category.icon}
          <span className="px-3 py-2">{category.traduction}</span>
          <span className="w-full transition-all h-[2px] group-aria-selected:opacity-100 group-aria-selected:bg-black group-hover:opacity-100 opacity-0 bg-neutral-400 block" />
        </button>
      ))}
    </nav>
  )
}
