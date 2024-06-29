import { redirect } from 'next/navigation'
import React from 'react'
import { LoginComponent } from 'ui/components/login'
import { getServerSession } from 'utils/auth'

export default async function LoginPage() {
  const session = await getServerSession()

  if (session) {
    return redirect('/')
  }

  return (
    <div className=" max-w-2xl mx-auto p-20">
      <LoginComponent />
    </div>
  )
}
