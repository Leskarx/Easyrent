"use client";
import React from 'react'
import { VscThreeBars } from "react-icons/vsc";
import Image from 'next/image';
import { useState } from 'react';
import MenuNavbar from './MenuNavbar';

export default function ProfileSectionNavbar({user}) {
  const [open, setOpen] = useState(false);
  return (
    <>
     <div onClick={()=>{
          setOpen(!open)
     }} className='relative  bg-white z-[500]  active:scale-105 hover:shadow-2xl transition shadow-black w-[85.6px] text-black rounded-full cursor-pointer h-[48px] p-2  '>
    <section className=' w-full h-full flex justify-center gap-2 items-center'>
    <VscThreeBars size={18} />
    <NavImage user={user}/>
    
    </section>
    {
open && (
  <MenuNavbar user={user}/>
)

    }
    </div>
   
    </>
   
  )
}

export function NavImage({user,mobile=false}){
  return(
    <main className={` relative  rounded-full aspect-square ${mobile?"w-[70px]":"w-[30.6px]"}  `}>
    <div className=' inset-0' >
        <Image
        className=' rounded-full'
        alt='profile'
        priority
        fill
        style={{
            objectFit:'cover',
        }}
        src={user?.image||'/placeholder.png'}
        />
        
        
    
    </div>
    
          </main>
  )
}
