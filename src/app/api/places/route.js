import { NextResponse } from 'next/server'
import { createPlace, getPlaces } from 'services/places'
import { auth } from 'utils/middleware-apis'
import { z } from 'zod'

export async function GET(req) {
  try {
    // verify the request is authorized
    auth(req)

    const { searchParams } = new URL(req.url)
    const category = searchParams.get('category')
    const places = await getPlaces({ category })

    return NextResponse.json(places)
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message
      },
      {
        status: 500
      }
    )
  }
}

export async function POST(req) {
  try {
    // verify the request is authorized
    auth(req)

    const data = await req.json()
    const validate = placeSchema.safeParse(data)
    if (!validate.success)
      return NextResponse.json(
        {
          message: validate.error.errors
        },
        {
          status: 400
        }
      )
    const placeCreated = await createPlace(validate.data)
    return NextResponse.json(placeCreated)
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message
      },
      {
        status: 500
      }
    )
  }
}

// create a schema to validate the request body
const placeSchema = z.object({
  thumbnail: z.string(),
  images: z.array(z.string()),
  latitude: z.number(),
  longitude: z.number(),
  rating: z.number().nullable().optional(),
  description: z.string(),
  location: z.string(),
  title: z.string(),
  category: z.string()
})
