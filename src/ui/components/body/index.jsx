import React, { Suspense } from 'react'
import { Categories } from './categories'
import { Places } from './places'

export const Body = () => {
  return (
    <div>
      <Suspense fallback={<></>}>
        <Categories />
      </Suspense>
      <Places />
    </div>
  )
}
