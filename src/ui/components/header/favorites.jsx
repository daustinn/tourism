import React from 'react'
import { useAuth } from 'stores/auth.store'

export const FavoritesBag = () => {
  const session = useAuth((store) => store.session)
  const hasFavorites = session?.favorite_places?.length > 0
  const favorite_places = session?.favorite_places
  if (!hasFavorites) return null
  return (
    <div className="absolute top-2 opacity-0 pointer-events-none group-hover:opacity-100 right-[-100%] -translate-x-2">
      <div className="relative text-nowrap transition-all bg-rose-600 text-white p-2 top-0 text-sm font-semibold rounded-xl px-2 translate-y-7 border-2 border-[#f3f2eb]">
        <svg
          width="20"
          viewBox="0 0 64 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-rose-600 absolute right-0 -translate-x-4 -top-1.5"
        >
          <path
            d="M28.0267 2.55997C30.4506 0.0890758 34.4568 0.176043 36.7712 2.7498L37.934 4.04283C43.787 10.5516 50.5994 16.1287 58.1358 20.5813L62.7003 23.2781C64.4529 24.3135 63.7186 27 61.683 27H2.95091C0.943341 27 0.187408 24.3728 1.88798 23.3058L8.35131 19.2507C14.0561 15.6715 19.3208 11.4345 24.037 6.62688L28.0267 2.55997Z"
            fill="currentColor"
          />
        </svg>
        {favorite_places?.length}{' '}
        {favorite_places.length === 1 ? 'lugar favorito' : 'lugares favoritos'}
      </div>
    </div>
  )
}
