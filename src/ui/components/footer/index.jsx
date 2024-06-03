import { Github } from 'lucide-react'
import React from 'react'

export const Footer = () => {
  return (
    <footer className=" border-t">
      <div className="max-w-5xl mx-auto px-4">
        <div className="p-4 text-sm font-sans space-y-3">
          <div className="flex gap-4">
            <p>
              © 2024{' '}
              <a href="/" className="text-black hover:underline">
                Ayacucho
              </a>
            </p>
            <a
              href="/"
              className="items-center flex gap-2 text-black hover:underline"
            >
              <Github size={15} />
              Source Code
            </a>
          </div>
          <p>
            Este proyecto es de código abierto y fué desarrollado con fines
            educativos, y está bajo la licencia <b>MIT</b>.
          </p>
        </div>
      </div>
    </footer>
  )
}
