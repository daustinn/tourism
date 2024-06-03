import React from 'react'

export const GalleryPlace = ({ place }) => {
  const thumbnail = [place.id]
  const images = [1, 2, 3, 4, 6, 7, 8].filter((image) => image !== place.id)
  const gallery = thumbnail.concat(images).slice(0, 5)
  return (
    <div className="w-full rounded-2xl overflow-hidden">
      <div className="grid grid-cols-4 gap-2 max-md:grid-cols-2">
        {gallery.map((image, index) => (
          <button
            key={index}
            className={`
            aspect-[9/9] overflow-hidden group bg-black
            ${index === 0 ? 'col-span-2 row-span-2' : ''}
          `}
          >
            <img
              src={`/intro/${image}.webp`}
              alt={place.title}
              className="w-full h-full group-hover:opacity-70 transition-all object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
