import { ExternalLink } from 'lucide-react'
import React from 'react'
export const contributors = [
  {
    name: 'daustinn',
    href: 'https://daustinn.com'
  },
  {
    name: 'darkalf',
    href: 'https://www.instagram.com/darkalf'
  },
  {
    name: 'marc.o9029',
    href: 'https://www.instagram.com/marc.o9029'
  },
  {
    name: 'bellidocornejo',
    href: 'https://www.instagram.com/bellidocornejo'
  },
  {
    name: 'anabelsotoloayza',
    href: 'https://www.instagram.com/anabelsotoloayza'
  },
  {
    name: 'dylsarmientom',
    href: 'https://www.instagram.com/dylsarmientom'
  }
]
export const Contributors = () => {
  return (
    <div className="border-t pt-3">
      <h2 className="font-semibold">Contribuidores</h2>
      <div className="flex flex-col space-y-2 pt-2">
        {contributors.map((item, index) => {
          return (
            <a
              key={index}
              href={item.href}
              target="_blank"
              className="flex items-center gap-1 hover:underline"
              rel="noopener noreferrer"
            >
              {item.name}
              <ExternalLink size={12} />
            </a>
          )
        })}
      </div>
    </div>
  )
}
