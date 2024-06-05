import React, { Suspense } from 'react'
import { Categories } from './categories'
import { Places } from './places'

export const Body = ({ searchParams }) => {
  return (
    <div>
      <Suspense fallback={<></>}>
        <Categories />
      </Suspense>
      <Suspense fallback={<></>} key={`${searchParams.category}-places`}>
        <Places searchParams={searchParams} />
      </Suspense>
    </div>
  )
}
