"use client";
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import LoadingScreen from '@/components/loadingScreen/LoadingScreen';

export default function NavbarMenuText({Title="title",link="/"}) {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  return (
 
    <>
{
      loading && (
        <LoadingScreen/>
      )
    }

    <div onClick={()=>{
      setLoading(true)
   router.push(link)
   if(link==pathname){
     setLoading(false)  }
    }}>

<p className=' w-full pl-3 py-2 font-medium text-slate-700 h-max hover:bg-slate-200 
   transition cursor-pointer 
'>{Title}</p>

    </div>

    
    
    </>
  
  
  )
}
