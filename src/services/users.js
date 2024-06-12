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
}

export { User }
