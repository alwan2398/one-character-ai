"use client"

import { sidebarItems } from '@/lib/constant'
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'


export default function Sidebar() {
    const pathname = usePathname();
  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-slate-900'>
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className='flex items-center pl-3 mb-14 text-2xl font-bold'>
        <h2 className='uppercase'>One AI</h2>
        </Link>
        <div className="space-y-2">
            {sidebarItems.map((item) => (
              <Link key={item.href} href={item.href} className={cn("group flex items-center rounded-md px-3 py-2 text-sm font-medium leading-6 text-slate-300 hover:bg-slate-700 hover:text-white hover:shadow-slate-700",
              pathname === item.href ? "bg-blue-700 text-white" : "text-zinc-300"
              )}>
                <div className="flex items-center flex-1">
                  <item.icon className="w-5 h-5 mr-2" aria-hidden="true" />
                  {item.name}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
