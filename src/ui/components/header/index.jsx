import React from 'react'
import { LineOnduled } from '../line-unduled'
import Link from 'next/link'
import { DialogAuth } from './dialog'
import { getServerSession } from 'utils/auth'
import { UserProfile } from './user'

export const Header = async () => {
  const session = await getServerSession()
  return (
    <header className="h-14">
      <div className="px-4 h-full max-w-5xl mx-auto">
        <div className="flex h-full items-center gap-5">
          <div className="flex-grow">
            <Link href="/" className="flex w-fit items-center gap-2">
              <img width={40} src="/favicon.ico" alt="" />
              <h1 className="text-2xl font-serif">Descubre Ayaucho</h1>
            </Link>
          </div>
          {session ? <UserProfile session={session} /> : <DialogAuth />}
        </div>
      </div>
      <LineOnduled />
    </header>
  )
}
