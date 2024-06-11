import { db } from '@/services/firebase'
import { getPlace } from '@/services/places'

jest.mock('@/services/firebase', () => ({
  db: {
    collection: jest.fn(() => ({
      where: jest.fn(() => ({
        get: jest.fn(() => ({
          docs: [
            {
              id: '3EW3tQJPNFKmThJeNfOr',
              data: () => ({
                category: 'museums',
                description:
                  'El Museo Casa del Retablo en Ayacucho, Perú, es un tesoro cultural que celebra la rica tradición de la artesanía local y la devoción religiosa. Este museo, ubicado en una encantadora casa colonial, alberga una extraordinaria colección de retablos, obras de arte tridimensionales talladas en madera que representan escenas religiosas y cotidianas. Los retablos exhibidos en este espacio cautivan con su detalle minucioso y colores vibrantes, mostrando la habilidad artística de los maestros artesanos ayacuchanos. Además de ser un escaparate de la destreza artística, la Museo Casa del Retablo ofrece a los visitantes una inmersión en la cultura y las tradiciones locales, proporcionando una visión única de la esencia creativa de Ayacucho y su conexión intrínseca con la historia y la espiritualidad.',
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
                  'El Templo de Santo Domingo, ubicado en la ciudad de Ayacucho, Perú, es una notable construcción católica de la Época Colonial. Este templo es una de las edificaciones coloniales más tempranas de la región. Según registros históricos, su construcción se llevó a cabo entre los siglos XVI y XVII. Los dominicos, fundadores del templo, llegaron a la actual provincia de Huamanga en 1542 con fines evangelizadores, lo que sugiere la existencia de un templo primitivo antes de la finalización del actual en 1561, con posteriores modificaciones en el siglo siguiente. Inicialmente, el Templo de Santo Domingo estuvo bajo la protección de la Virgen del Rosario. Estructuralmente, la iglesia presenta una notable influencia mudéjar, destacándose por su cúpula de piedra, una de las mejor conservadas en Ayacucho. La fachada del templo es especialmente llamativa, compuesta por tres arcos que soportan una galería con cubierta de tejas. Esta galería incluye dos puertas de ingreso estrechas, entre las cuales se encuentra la efigie de la Virgen del Rosario, la patrona inicial del templo.',
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
              'La Catedral de Ayacucho, joya arquitectónica en el corazón de la ciudad homónima en Perú, se erige como un testimonio imponente de la historia y la fe. Construida en el siglo XVII, esta majestuosa catedral fusiona estilos barrocos y renacentistas, exhibiendo una fachada esculpida con maestría y una rica ornamentación. Al ingresar, los visitantes quedan maravillados por la magnificencia de sus altares dorados, retablos tallados a mano y una impresionante colección de arte religioso. La Catedral no solo es un símbolo de la devoción de Ayacucho, sino también un museo vivo que preserva la herencia cultural y espiritual de la región. Cada rincón de este sagrado edificio cuenta una historia que trasciende los siglos, convirtiéndolo en un destino esencial para aquellos que buscan sumergirse en la riqueza histórica y artística de Ayacucho.',
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
