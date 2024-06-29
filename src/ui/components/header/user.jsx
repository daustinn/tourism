'use client'

import axios from 'axios'
import { LogOut, Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FavoritesBag } from './favorites'
import { Suspense } from 'react'

export const UserProfile = ({ session }) => {
  const logout = async () => {
    await axios.post('/api/auth/logout')
    window.location.reload()
  }
  return (
    <div className="flex items-center gap-5">
      <Link href="/me" className="flex items-center gap-2 font-semibold">
        <div className="flex flex-col text-right">
          <p className="p-0 m-0 leading-4">
            {session.name?.split(' ')[0] ?? session.email.split('@')[0]}
          </p>
          <span className="text-xs opacity-50">{session.email}</span>
        </div>
        <div className="w-10 aspect-square rounded-full overflow-hidden">
          <img
            src={session.profile}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      <Link
        href="/me/favorites"
        className="rounded-lg group relative hover:scale-110 transition-all block"
      >
        <Suspense fallback={<></>}>
          <FavoritesBag />
        </Suspense>
        <span className="w-3 border border-[#f3f2eb] aspect-square rounded-full bg-rose-500 block -top-1 -right-1 absolute"></span>
        <Heart size={25} />
      </Link>
      <button
        onClick={logout}
        className="p-2 rounded-lg hover:scale-110 transition-all"
      >
        <LogOut size={20} />
      </button>
    </div>
  )
}
