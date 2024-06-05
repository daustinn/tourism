import { db } from './firebase'

async function getPlaces({ category }) {
  try {
    const placesRef = db.collection('places')

    console.log(category)
    const snapshot = category
      ? await placesRef.where('category', '==', category).get()
      : await placesRef.get()

    const places = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })

    return places
  } catch (error) {
    return []
  }
}

async function getPlace(id) {
  try {
    const doc = await db.collection('places').doc(id).get()
    return { id: doc.id, ...doc.data() }
  } catch (error) {
    return null
  }
}

export { getPlaces, getPlace }
