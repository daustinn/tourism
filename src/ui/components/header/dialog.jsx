'use client'

import React from 'react'
import * as Portal from '@radix-ui/react-portal'
import { LoginComponent } from '../login'

export const DialogAuth = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg flex items-center gap-2 text-sm border-stone-300 hover:border-stone-400 border p-2 px-3 font-semibold"
      >
        Iniciar Sesión
      </button>
      {open && (
        <Portal.Root>
          <div
            onClick={() => setOpen(false)}
            className="fixed z-50 inset-0 backdrop-blur-sm bg-[#82817e69]"
          />
          <div className="fixed z-50 inset-0 grid place-content-center pointer-events-none">
            <div
              className="rounded-2xl pointer-events-auto shadow-[0px_0px_30px_10px_rgba(46,46,43,0.05)] border border-stone-200 bg-[#f3f2eb] p-2 w-[500px]"
              role="dialog"
            >
              <LoginComponent />
            </div>
          </div>
        </Portal.Root>
      )}
    </div>
  )
}
