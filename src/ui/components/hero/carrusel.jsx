'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react'
import { EffectCards } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

export function Carrusel() {
  const items = [1, 2, 3, 4, 5, 6, 7]
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="w-[400px] h-[300px] "
    >
      {items.map((item, index) => (
        <SwiperSlide
          key={index}
          className="rounded-2xl shadow-xl shadow-amber-500/5"
        >
          <img
            src={`/intro/${item}.webp`}
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
