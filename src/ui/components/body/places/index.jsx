// import { db } from '@/services/firebase'
import React from 'react'
import { Place } from './place'
import mockup from '@/mockups/places.json'
export async function Places({ searchParams }) {
  // const placesRef = db.collection('places')
  // const snapshot = await placesRef.get()

  const category = searchParams.category ?? 'all'

  const places = mockup.filter((place) => {
    if (category === 'all') return true
    return place.category === category
  })
  return (
    <div className="grid grid-cols-3 pb-10 gap-x-10 gap-y-5 max-md:grid-cols-2 max-sm:gap-x-5 max-sm:gap-y-2">
      {places.length === 0 && (
        <div className="col-span-3 text-center py-36 text-gray-500">
          No places found
        </div>
      )}
      {places.map((place, index) => (
        <Place
          category={place.category}
          description={place.description}
          key={index}
          location={place.location}
          thumbnail={place.thumbnail}
          title={place.title}
          rating={place.rating}
        />
      ))}
    </div>
  )
}
