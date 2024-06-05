import { ChevronLeft } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import React from 'react'

export const GalleryPlace = ({
  place: { thumbnail, images, title, description }
}) => {
  const [gallery] = React.useState([thumbnail].concat(images))
  const [current, setCurrent] = React.useState(0)
  return (
    <div className="relative">
      <div className="absolute z-20 gap-1 bottom-3 w-full flex justify-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            role="tab"
            aria-selected={index === current}
            onClick={() => setCurrent(index)}
            key={index}
            className="w-1.5 aspect-square bg-white/70 aria-selected:bg-white shadow-lg rounded-full"
          />
        ))}
      </div>
      <div className="absolute opacity-0 group-hover:opacity-100 transition-all bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none px-2 flex items-center justify-between inset-0 z-10">
        {[-1, 1].map((direction) => (
          <button
            key={direction}
            onClick={() =>
              setCurrent((prev) =>
                prev + direction < 0
                  ? gallery.length - 1
                  : (prev + direction) % gallery.length
              )
            }
            className="text-black/80 w-7 h-7 grid place-content-center aspect-square bg-white pointer-events-auto bg-opacity-80 shadow-md rounded-full"
          >
            {direction === 1 ? <ChevronRight /> : <ChevronLeft />}
          </button>
        ))}
      </div>
      <div className="aspect-[9/7] bg-neutral-100 rounded-2xl overflow-hidden">
        <img
          src={gallery[current]}
          alt={title + description}
          className="w-full h-full object-cover transition-all"
        />
      </div>
    </div>
  )
}
