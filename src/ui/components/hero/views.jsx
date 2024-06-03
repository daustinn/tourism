import { Eye } from 'lucide-react'
import React from 'react'
import axios from 'axios'

const realTimeUri = process.env.REALTIME_DATABASE_URL

export async function ViewsPage() {
  try {
    const views = await axios.get(`${realTimeUri}/view.json`)
    return (
      <div className="px-2">
        <p className="flex gap-2 font-semibold text-sm opacity-60 items-center flex-wrap">
          <Eye size={20} />
          {views.data.count} Vistas
        </p>
      </div>
    )
  } catch (error) {
    return <div>Error</div>
  }
}
