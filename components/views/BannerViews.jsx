"use client"
import React from 'react'
import { useUser } from '@clerk/nextjs'

export default function BannerViews() {
  const {user} = useUser();
  return (
    <div className='lg:mt-8 mt-4'>
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 h-52 rounded-lg p-4">
        <div className="rounded-lg flex flex-col border border-white glassmorphism text-center h-44 p-2">
          <h2 className='lg:text-4xl text-xl font-bold mt-4 lg:mt-6'>Hai {user?.firstName} ✋</h2>
          <p className='lg:text-4xl text-lg font-bold mt-2'>Selamat datang di <span className='uppercase'>one ai</span></p>
        </div>
      </div>
    </div>
  )
}
