import React from 'react'
import { getServerSession } from 'utils/auth'
import { SetClientSession } from './set-client-session'
import { getUserById } from 'services/users'
import { Suspense } from 'react'

export const SetServerSession = async () => {
  const session = await getServerSession()
  if (!session) return null

  const user = await getUserById(session.id)
  return (
    <Suspense>
      <SetClientSession session={user} />
    </Suspense>
  )
}
