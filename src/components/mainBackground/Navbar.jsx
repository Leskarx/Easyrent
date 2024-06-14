"use client";
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react';

export default function Navbar({user}) {
  const router=useRouter();
  return (
   <main style={{
    backgroundImage: "url('/bg.jpg')",
    backgroundSize: "cover",
   }} className='md:block hidden -z-50 '>
     <div className='  h-screen flex flex-col  w-full text-white p-2'>
<div className='  w-full h-max flex justify-between items-center '>
<section className=' relative  h-[80px] w-[200px] '>
<div className=' inset-0'>
<Image
src={"/logo.png"}
alt="LOgo"
fill
priority
style={{objectFit:"contain"}}
/>
</div>
</section>

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
<section className='  w-full h-full'>
  dfb
</section>


      
    </div>
   </main>
  )
}
