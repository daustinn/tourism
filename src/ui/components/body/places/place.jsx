'use client'

import { Star, MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { GalleryPlace } from './gallery'
import { ButtonFavorite } from './favorite'
import { Suspense } from 'react'
export const Place = ({ place }) => {
  const { id, thumbnail, title, location, rating, images, description } = place

  return (
    <div className="relative group" data-testid="gallery-place">
      <div className="relative">
        <Suspense fallback={<></>}>
          <ButtonFavorite place={place} />
        </Suspense>
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
      <Link href={`/places/${id}`} className="absolute inset-0" />
    </div>
  )
}
