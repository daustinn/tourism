import { db } from 'services/firebase'
import { getPlace } from 'services/places'

jest.mock('../../services/firebase', () => ({
  db: {
    collection: jest.fn(() => ({
      where: jest.fn(() => ({
        get: jest.fn(() => ({
          docs: [
            {
              id: '3EW3tQJPNFKmThJeNfOr',
              data: () => ({
                category: 'museums',
                description: 'El Museo Casa del Retablo en Ayacucho, Perú, ',
                images: [
                  'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717457602/places/xmfa6quqm2vprx9ftlkf.jpg',
                  'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717457602/places/twlb14cxwcc3jlkpurbw.jpg',
                  'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717457602/places/di9uqorvl0hretkbmffp.jpg',
                  'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717457602/places/ogiwwvuzi3vcvjkejjnr.jpg'
                ],
                latitude: -13.13634,
                location:
                  'Los Artesanos Mz F Lt 1 A 250m Del Terminal, Ayacucho 05001 Perú',
                longitude: -74.23203,
                rating: 3.4,
                thumbnail:
                  'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717457602/places/vqofs4ovtijwf5ucqft0.jpg',
                title: 'Museo Casa del Retablo'
              })
            },
            {
              id: '81sxuH538eeffaO4NcAV',
              data: () => ({
                category: 'churches',
                description:
                  'El Templo de Santo Domingo, ubicado en la ciudad de',
                images: [
                  'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717605708/places/upohqokuqsmsruhpin5h.jpg',
                  'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717605680/places/x81f3tcoluor6ldct6ls.jpg',
                  'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717605680/places/cq61ovkxbep7wih0brfr.jpg',
                  'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717605680/places/oyvynx8iwgtl0nri0bnf.jpg'
                ],
                latitude: -13.15815,
                location: '9 de Diciembre, Ayacucho 05003',
                longitude: -74.2251,
                rating: 4.5,
                thumbnail:
                  'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717605708/places/c3sdfgufutoii01a8lzl.jpg',
                title: 'Templo de Santo Domingo'
              })
            }
          ]
        }))
      })),
      doc: jest.fn((id) => ({
        get: jest.fn(() => ({
          id,
          data: () => ({
            category: 'churches',
            description:
              'La Catedral de Ayacucho, joya arquitectónica en el corazón de la c',
            images: [
              'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717457450/places/jtyamkybtvnrllgru14w.jpg',
              'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717457450/places/kuhmtzcxnwuqzt36f3s7.jpg',
              'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717457450/places/uwznsshwtlgnxefeaaee.jpg',
              'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717457451/places/dlymf4oaajqsdkhisk0x.jpg'
            ],
            latitude: -13.1607,
            location: 'Plaza Mayor n° 100, Ayacucho 05000 Perú',
            longitude: -74.2252,
            rating: 4.5,
            thumbnail:
              'http://res.cloudinary.com/dqd27kzvn/image/upload/v1717457450/places/xdcy7cgun5et6vy6uqwf.jpg',
            title: 'Catedral de Ayacucho'
          })
        }))
      }))
    }))
  }
}))

describe('Firebase Functions', () => {
  describe('getPlace', () => {
    it('returns null when place is not found', async () => {
      db.collection()
        .doc()
        .get.mockImplementationOnce(() => ({
          exists: false
        }))

      const place = await getPlace('nonexistentPlace')

      expect(place).toBeNull()
    })

    it('returns null on error', async () => {
      db.collection()
        .doc()
        .get.mockImplementationOnce(() => {
          throw new Error('Firestore error')
        })

      const place = await getPlace('place1')

      expect(place).toBeNull()
    })
  })
})
