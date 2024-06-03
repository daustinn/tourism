import React from 'react'
import { LineOnduled } from '../line-unduled'

export const Header = () => {
  return (
    <header className="h-14">
      <div className="flex items-center px-4 h-full gap-5 max-w-5xl mx-auto">
        <button>Inicia Sesión</button>
      </div>
      <LineOnduled />
    </header>
  )
}
