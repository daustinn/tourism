import axios from 'axios'

const realTimeUri = process.env.REALTIME_DATABASE_URL

export async function SetViews() {
  try {
    const prevViews = await axios.get(`${realTimeUri}/view.json`)
    const views = prevViews.data.count + 1
    await axios.patch(`${realTimeUri}/view.json`, {
      count: views
    })
    return <></>
  } catch (error) {
    return null
  }
}
