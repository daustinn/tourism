import { Body } from '@/ui/components/body'
import { Hero } from '@/ui/components/hero'
import { LineOnduled } from '@/ui/components/line-unduled'
import { SetViews } from '@/ui/components/set'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className="flex-grow flex flex-col">
      <Suspense fallback={<></>}>
        <SetViews />
      </Suspense>
      <div className="max-w-5xl mx-auto px-4">
        <Hero />
      </div>
      <LineOnduled />
      <div className="max-w-5xl flex-grow mx-auto px-4">
        <Body />
      </div>
    </main>
  )
}
