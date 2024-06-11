import { NextResponse } from 'next/server'
import { getPlace } from '../../../../services/places'
import { auth } from '../../../../utils/middleware-apis'

export async function GET(req, { params }) {
  try {
    // verify the request is authorized
    auth(req)

    const slug = params.slug
    const place = await getPlace(slug)
    return NextResponse.json(place)
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
