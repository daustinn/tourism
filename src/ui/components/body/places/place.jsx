import { Star } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Place = ({ thumbnail, title, location, rating }) => {
  const url = title.toLowerCase()
  return (
    <Link href={`/places/${url}`} className="group">
      <div className="relative">
        <button className="absolute hover:scale-110 transition-all top-4 right-4 text-white">
          <Heart size={25} fill="rgba(0,0,0,.5)" />
        </button>
        <div className="aspect-[9/7] rounded-2xl overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full group-hover:scale-105 transition-transform duration-200 object-cover"
          />
        </div>
        <div className="pt-2 text-black space-y-2 px-1 font-sans">
          <div className="flex gap-2">
            <h2 className="font-semibold flex-grow">{title}</h2>
            <div className="flex items-center gap-1">
              <Star size={15} fill="black" />
              <p>{rating}</p>
            </div>
          </div>
          <p className="text-sm opacity-80">
            <MapPin size={15} className="inline-flex mr-1" />
            {location}
          </p>
        </div>
        {/* <p>{place.location}</p> */}
        {/* <p>{place.description}</p> */}
      </div>
    </Link>
  )
}
