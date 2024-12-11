import { Button } from '@/components/ui/button'
import { UserProfile } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

export default function Settings() {
  return (
    <div className='flex flex-col items-center justify-center my-48'>
      <h2>Settings Page Dalam Pembangunan</h2>
      <Link href="/dashboard" className='mt-4'>
      <Button className='text-white'>Kembali Ke Dashboard</Button>
      </Link>
    </div>
  )
}
