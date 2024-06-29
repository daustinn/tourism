import { NextResponse } from 'next/server'
import { getPlace } from 'services/places'
import { User } from 'services/users'
import { authSession } from 'utils/middleware-apis'

export async function POST(req, { params }) {
  try {
    // verify the request is authorized
    const user = await authSession()
    const slug = params.slug
    const place = await getPlace(slug)
    const id = await User.addOrRomeFavoritePlace(place, user)
    return NextResponse.json({ id })
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
