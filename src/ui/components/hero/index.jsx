import { Tai_Heritage_Pro } from 'next/font/google'
import { Carrusel } from './carrusel'
import { ViewsPage } from './views'

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
          <ViewsPage />
        </div>
        <h1
          className={`text-6xl font-semibold tracking-tighter text-[#3e3117] animate-fade-in-down ${font.className}`}
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
