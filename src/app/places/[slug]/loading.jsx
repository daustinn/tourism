import React from 'react'

export default function LoadinPlacePage() {
  return (
    <div className="max-w-5xl mx-auto font-sans w-full py-6 px-4">
      <div className="flex flex-col">
        <div className="h-10 rounded-xl animate-pulse flex bg-neutral-200 w-[200px] items-center"></div>
        <div className="space-y-3 mt-5">
          <div className="w-full rounded-2xl overflow-hidden">
            <div className="grid min-h-[30svh] grid-cols-4 gap-2 max-md:grid-cols-2">
              {[0, 1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className={`aspect-[9/9] overflow-hidden group bg-neutral-200 animate-pulse
                    ${index === 0 ? 'col-span-2 row-span-2' : ''}
                 `}
                />
              ))}
            </div>
          </div>
          <div className="w-32 h-5 bg-neutral-200 rounded-xl animate-pulse" />
        </div>
      </div>
    </div>
  )
}
