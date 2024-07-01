"use client";
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import LoadingScreen from '@/components/loadingScreen/LoadingScreen';
import { usePathname } from 'next/navigation';
export default function LogoSectionNav() {
  const pathname = usePathname()

  const router = useRouter()
  const [loading, setLoading] = useState(false)
  return (
  
    <>
    {
      loading && (
        <LoadingScreen/>
      )
    }
    
    <section onClick={()=>{
      if(pathname!=="/"){
        setLoading(true)
      }

      router.push('/')
   

      
    }} className=' cursor-pointer relative  h-[80px] w-[200px] '>
    <div className=' inset-0'>
    <Image
    src={"/LOGO_WHITE.svg"}
    alt="LOgo"
    fill
    priority
    style={{objectFit:"contain"}}
    />
    </div>
    </section>
    </>
  
  )
}
