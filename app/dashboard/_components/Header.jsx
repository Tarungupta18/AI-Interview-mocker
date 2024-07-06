"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Header() {

  const router = useRouter();

  const path = usePathname();
  useEffect(() => {
    // console.log(path)
  }, [path]);
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
          <Image src={'/logos.svg'} width={160} height={100} alt='logo' />
          <ul className='hidden md:flex gap-6'>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
              ${path=='/dashboard' && 'text-primary font-bold'}
            `}
              onClick={()=>router.replace('/dashboard')}
            >Dashboard</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
              ${path == '/dashboard/question' && 'text-primary font-bold'} `}
              onClick={()=>router.replace('/dashboard/question')}
            >Questions</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
              ${path=='/dashboard/upgrade' && 'text-primary font-bold'}
            `}
              onClick={()=>router.replace('/dashboard/upgrade')}
            >Upgrade</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
              ${path=='/dashboard/how' && 'text-primary font-bold'}
            `}
              onClick={()=>router.replace('/dashboard/how')}
            >How it works?</li>
          </ul> 
          <UserButton />
    </div>
  )
}
