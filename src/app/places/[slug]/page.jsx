import React from 'react'
import { PlaceSlug } from '@/ui/components/slug-place'
import { getPlace } from '@/services/places'

export async function generateMetadata({ params }) {
  const parserSlug = decodeURIComponent(params.slug)
  try {
    const place = await getPlace(parserSlug)
    return {
      title: place.title + `' | Ayacucho'`,
      description: place.description,
      openGraph: {
        images: [place.thumbnail, ...place.images]
      }
    }
  } catch (error) {
    console.error(error)
  }
}
export default async function PlacePage({ params: { slug } }) {
  const parserSlug = decodeURIComponent(slug)
  try {
    // delay
    // await new Promise((resolve) => setTimeout(resolve, 5000))
    const place = await getPlace(parserSlug)
    return <PlaceSlug place={place} />
  } catch (error) {
    console.error(error)
  }
}
