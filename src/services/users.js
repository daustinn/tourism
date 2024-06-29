import { db } from './firebase'

class User {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.email = data.email
    this.password = data.password
    this.profile = data.profile
  }

  static async get({ email }) {
    try {
      const docs = await db
        .collection('users')
        .where('email', '==', email)
        .get()
      const doc = docs.docs[0]
      if (!doc) return null

      return new User({
        id: doc.id,
        ...doc.data()
      })
    } catch (error) {
      return null
    }
  }

  static async create(data) {
    try {
      const docRef = await db.collection('users').add(data)
      const newDoc = await docRef.get()
      return new User({
        id: docRef.id,
        ...newDoc.data()
      })
    } catch (error) {
      return null
    }
  }

  static async byId(id) {
    try {
      const doc = await db.collection('users').doc(id).get()
      return new User({
        id: doc.id,
        ...doc.data()
      })
    } catch (error) {
      return null
    }
  }

  static async addOrRomeFavoritePlace(place, user) {
    try {
      const doc = await db.collection('users').doc(user.id).get()
      let favorite_places = doc.data().favorite_places || []

      const isAdded = doc.data().favorite_places?.includes(place.id)
      if (isAdded) {
        favorite_places = favorite_places.filter((p) => p !== place.id)
      } else {
        favorite_places.push(place.id)
      }
      await db.collection('users').doc(user.id).update({
        favorite_places
      })
    } catch (error) {
      throw Error(error)
    }
  }
}

export { User }

export async function getUserById(id) {
  try {
    const doc = await db.collection('users').doc(id).get()
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
