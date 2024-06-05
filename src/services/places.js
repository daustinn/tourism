import mockup from '@/mockups/places.json'

async function getPlaces({ category }) {
  // const placesRef = db.collection('places')
  // const snapshot = await placesRef.get()

  try {
    const places = mockup.filter((place) => {
      if (category === 'all') return true
      return place.category === category
    })
    return places
  } catch (error) {
    return []
  }
}

export { getPlaces }
