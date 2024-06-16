import React from 'react'
import { VscThreeBars } from "react-icons/vsc";
import Image from 'next/image';

export default function ProfileSectionNavbar({user}) {
  return (
    <div className=' bg-white  active:scale-105 hover:shadow-2xl transition shadow-black w-[85.6px] text-black rounded-full cursor-pointer h-[48px] p-2  '>
    <section className=' w-full h-full flex justify-center gap-2 items-center'>
    <VscThreeBars size={18} />
      <main className=' relative  rounded-full aspect-square w-[30.6px]  '>
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
    </section>
    </div>
  )
}
