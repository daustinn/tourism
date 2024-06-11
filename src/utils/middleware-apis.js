const apikey = process.env.API_ROUTES_API_KEY

export function auth(req) {
  try {
    const token = req.headers.get('authorization')?.split(' ')[1]
    if (!token || token !== apikey) throw Error('Unauthorized')
  } catch (error) {
    throw Error(error)
  }
}
