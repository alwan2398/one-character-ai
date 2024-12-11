import Image from 'next/image'
import React from 'react'

export default function AuthLayout({ children }) {
  return (
    <main className="relative h-screen w-full">
      <div className="absolute size-full">
        <Image src="/auth-bg.png" alt="background" fill className="size-full" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      {children}
    </main>
  )
}
