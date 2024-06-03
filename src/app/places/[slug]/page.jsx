import React from 'react'
import mockup from '@/mockups/places.json'
import { redirect } from 'next/navigation'
import { PlaceSlug } from '@/ui/components/slug-place'

export function generateMetadata({ params }) {
  const parserSlug = decodeURIComponent(params.slug)

  const place = mockup.find(
    (place) => place.title.toLowerCase() === parserSlug.toLowerCase()
  )

  return {
    title: place.title + ' | Ayacucho',
    description: 'Place description'
  }
}
export default function PlacePage({ params: { slug } }) {
  const parserSlug = decodeURIComponent(slug)
  const place = mockup.find(
    (place) => place.title.toLowerCase() === parserSlug.toLowerCase()
  )
  if (!place) {
    return redirect('/')
  }

  return <PlaceSlug place={place} />
}
