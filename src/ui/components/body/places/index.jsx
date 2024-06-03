// import { db } from '@/services/firebase'
import React from 'react'
import { Place } from './place'
import mockup from '@/mockups/places.json'
export async function Places() {
  // const placesRef = db.collection('places')
  // const snapshot = await placesRef.get()
  return (
    <div className="grid grid-cols-3 pb-10 gap-x-10 gap-y-5 max-md:grid-cols-2 max-sm:gap-x-5 max-sm:gap-y-2">
      {mockup.map((place, index) => (
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
