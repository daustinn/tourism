import { Carrusel } from '@/ui/components/carrusel'
import { ViewsPage } from '@/ui/components/views'
import { ArrowRight } from 'lucide-react'
import { Tai_Heritage_Pro } from 'next/font/google'

const font = Tai_Heritage_Pro({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const Hero = () => {
  const tags = ['Ayacucho', 'Perú', 'Turismo', 'Viajes']

  return (
    <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 max-md:flex-col-reverse items-center py-20">
      <header className="">
        <div className="flex items-center gap-2 mb-5">
          <a
            href=""
            className="bg-red-700 flex items-center group rounded-xl p-2 shadow-md shadow-red-500/20 px-3 font-semibold text-white"
          >
            #Open Source{' '}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-2 transition-all"
            />
          </a>
          <ViewsPage />
        </div>
        <h1
          className={`text-6xl font-semibold tracking-tighter text-[#17233e] font-serif animate-fade-in-down ${font.className}`}
        >
          Descubre Ayacucho, Lugares Históricos y Naturales
        </h1>
        <div className="flex gap-1 mt-2 flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-neutral-200 font-semibold text-xs rounded-md p-1 py-0.5 text-black mb-2 block w-fit px-3"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>
      <div className="max-md:hidden">
        <Carrusel />
      </div>
    </div>
  )
}
