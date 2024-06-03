import React from 'react'
import { NavPlace } from './nav'
import { GalleryPlace } from './gallery'
import { Star } from 'lucide-react'
import Link from 'next/link'
import { Comments } from './comments'

export const PlaceSlug = ({ place }) => {
  const latitud = -13.04215644190187
  const longitud = -74.13122401117998

  const constructLink = `https://www.google.com/maps/search/?api=1&query=${latitud},${longitud}`
  return (
    <div className="max-w-5xl mx-auto font-sans w-full min-h-[60svh] py-6 px-4">
      <div className="flex flex-col">
        <NavPlace place={place} />
        <div className="space-y-3">
          <GalleryPlace place={place} />
          <Link
            target="_blank"
            href={constructLink}
            className="text-2xl block"
            rel="noreferrer"
          >
            {place.location}
          </Link>
          <p>{place.description}</p>
          <div className="flex items-center text-xl gap-1">
            <Star size={15} fill="black" />
            <p>{place.rating} Estrellas</p>
          </div>
          <div className="border-t">
            <Comments />
          </div>
        </div>
      </div>
    </div>
  )
}
