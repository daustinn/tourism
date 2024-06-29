import { db } from './firebase'

async function getPlaces({ category }) {
  try {
    const placesRef = db.collection('places')
    const snapshot = category
      ? await placesRef.where('category', '==', category).get()
      : await placesRef.get()

    const places = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })

    return places
  } catch (error) {
    return []
  }
}

async function getPlace(id) {
  try {
    const doc = await db.collection('places').doc(id).get()
    if (!doc.exists) {
      return null
    }

    return {
      id: doc.id,
      ...doc.data()
    }
  } catch (error) {
    return null
  }
}

// create a function create a new place
async function createPlace(data) {
  try {
    const docRef = await db.collection('places').add(data)
    return {
      id: docRef.id,
      ...data
    }
  } catch (error) {
    return null
  }
}

export { getPlaces, getPlace, createPlace }
