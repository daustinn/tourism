import { Body } from '@/ui/components/body'
import { Hero } from '@/ui/components/hero'
import { LineOnduled } from '@/ui/components/line-unduled'

export default function Home() {
  return (
    <main className="">
      <div className="max-w-5xl mx-auto px-4">
        <Hero />
      </div>
      <LineOnduled />
      <div className="max-w-5xl mx-auto px-4">
        <Body />
      </div>
    </main>
  )
}
