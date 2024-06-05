'use client'

import { Star } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
// import { categories } from '../categories'
import { GalleryPlace } from './gallery'

export const Place = ({
  place: { thumbnail, title, location, rating, images, description }
}) => {
  const url = title.toLowerCase()
  // const CategoryIcon = categories.find((c) => c.key === category)?.icon

  return (
    <div className="relative group">
      <div className="relative">
        <button className="absolute z-10 hover:scale-110 transition-all top-4 right-4 text-white">
          <Heart size={25} fill="rgba(0,0,0,.5)" />
        </button>

        <GalleryPlace
          place={{
            images,
            thumbnail,
            title,
            description
          }}
        />

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
      </div>
      <Link href={`/places/${url}`} className="absolute inset-0" />
    </div>
  )
}
