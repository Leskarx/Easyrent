"use client";
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react';

export default function Navbar({user}) {
  const router=useRouter();
  return (
    <div className=' absolute -top-10 md:block hidden  w-full text-white p-2'>
<div className=' w-full h-full flex justify-between items-center '>
<Image
src={"/Blue Simple Classic Property Real Estate Logo 2.png"}
alt="LOgo"
quality={100}
priority
sizes='10vw'
width={150}
height={70}
/>

<ul className=' flex gap-10 mr-2 '>
 {
 user?<li className=' cursor-pointer' onClick={()=>{
 signOut()
}}>Logout</li> : <li className=' cursor-pointer' onClick={()=>{
  router.push("/login")
}}>Login/SignUp</li>
 }
 
  
    <li  className=' cursor-pointer'>Legal</li>
    <li  className=' cursor-pointer'>Support</li>
    <li  className=' cursor-pointer'>About Us</li>
</ul>

</div>
      
    </div>
  )
}
