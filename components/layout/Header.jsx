"use client"

import Link from 'next/link';
import { Button } from '../ui/button'
import { useUser } from '@clerk/nextjs';

export default function Header() {
    const {user} = useUser();
  return (
    <header className='fixed top-0 z-50 w-full max-w-screen-2xl bg-background backdrop-blur-lg mx-auto border-b'>
      <nav className="flex items-center justify-between md:px-6 md:py-6 px-4 py-4">
        <h1 className='md:text-2xl text-xl uppercase font-bold'>one ai</h1>
      <div className="flex items-center gap-4">
      <Button variant="outline" className="border-white hover:border-primary transition-colors hidden md:block">Learn More</Button>
      {user ? (
        <Link href="/dashboard">
        <Button className="text-white hidden md:block">Dashboard</Button>
        </Link>
      ) : (
        <Link href="/sign-in">
        <Button className="text-white hidden md:block">Get Started</Button>
        </Link>
      )}
      </div>
      </nav>
    </header>
  )
}
