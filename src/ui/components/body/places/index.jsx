import React from 'react'
import { Place } from './place'
import { getPlaces } from 'services/places'
export async function Places({ searchParams }) {
  try {
    const category = searchParams.category
    const places = await getPlaces({ category })

    return (
      <div className="grid grid-cols-3 pb-10 gap-x-10 gap-y-5 max-md:grid-cols-2 max-sm:gap-x-5 max-sm:gap-y-2">
        {places.length === 0 && (
          <div className="col-span-3 text-center py-36 text-gray-500">
            No places found
          </div>
        )}
        {places.map((place, index) => (
          <Place place={place} key={index} />
        ))}
      </div>
    )
  } catch (error) {
    return (
      <div className="col-span-3 text-center py-36 text-gray-500">
        Error loading places
      </div>
    )
  }
}
