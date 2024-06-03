import { Heart, MapPin, Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Places = () => {
  const examplePlaces = [
    {
      thumbnail: '/intro/1.webp',
      title: 'Catedral de Santa María',
      category: 'churches',
      location: 'Plaza de la Catedral, 8, 03002 Alicante, España',
      description:
        'La Concatedral de San Nicolás de Bari es un templo religioso de culto católico situado en la ciudad de Alicante (España).'
    },
    {
      thumbnail: '/intro/2.webp',
      title: 'Museo Arqueológico de Alicante',
      category: 'museums',
      location: 'Plaza Dr. Gómez Ulla, s/n, 03013 Alicante, España',
      description:
        'El Museo Arqueológico de Alicante (MARQ) es un museo arqueológico situado en la ciudad de Alicante (España).'
    },
    {
      thumbnail: '/intro/3.webp',
      title: 'Parque de Canalejas',
      category: 'parks',
      location: 'Av. de Federico Soto, 1, 03003 Alicante, España',
      description:
        'El Parque de Canalejas es un parque situado en la ciudad de Alicante (España).'
    },
    {
      thumbnail: '/intro/4.webp',
      title: 'Restaurante Dársena',
      category: 'restaurants',
      location: 'Muelle de Levante, 6, 03001 Alicante, España',
      description:
        'El Restaurante Dársena es un restaurante situado en el puerto de Alicante (España).'
    },
    {
      thumbnail: '/intro/5.webp',
      title: 'Hotel Meliá Alicante',
      category: 'hotels',
      location: 'Plaza del Puerto, 3, 03001 Alicante, España',
      description:
        'El Hotel Meliá Alicante es un hotel situado en el puerto de Alicante (España).'
    },
    {
      thumbnail: '/intro/6.webp',
      title: 'Playa del Postiguet',
      category: 'beaches',
      location: 'Av. de Jovellanos, s/n, 03002 Alicante, España',
      description:
        'La Playa del Postiguet es una playa situada en la ciudad de Alicante (España).'
    },
    {
      thumbnail: '/intro/7.webp',
      title: 'Castillo de Santa Bárbara',
      category: 'castles',
      location: 'Monte Benacantil, s/n, 03002 Alicante, España'
    }
  ]
  return (
    <div className="grid grid-cols-3 pb-10 gap-x-10 gap-y-5 max-md:grid-cols-2 max-sm:gap-x-5 max-sm:gap-y-2">
      {examplePlaces.map((place, index) => {
        return (
          <Link key={index} href={'/'}>
            <div className="relative">
              <button className="absolute hover:scale-110 transition-all top-4 right-4 text-white">
                <Heart size={25} fill="rgba(0,0,0,.5)" />
              </button>
              <div className="aspect-[9/7] rounded-2xl overflow-hidden">
                <img
                  src={place.thumbnail}
                  alt={place.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2 text-black space-y-2 px-1 font-sans">
                <div className="flex gap-2">
                  <h2 className="font-semibold flex-grow">{place.title}</h2>
                  <div className="flex items-center gap-1">
                    <Star size={15} fill="black" />
                    <p>4.5</p>
                  </div>
                </div>
                <p className="text-sm opacity-80">
                  <MapPin size={15} className="inline-flex mr-1" />
                  {place.location}
                </p>
              </div>
              {/* <p>{place.location}</p> */}
              {/* <p>{place.description}</p> */}
            </div>
          </Link>
        )
      })}
    </div>
  )
}
