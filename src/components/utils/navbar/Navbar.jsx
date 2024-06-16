"use client";
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react';
import LogoSectionNav from './LogoSectionNav';
import RightNavbarSection from './RightNavbarSection';
import MobileScreenNavbar from './MobileScreenNavbar';

export default function Navbar({user,authPage=false,homePage=false}) {
  const router=useRouter();
  return (
  <>
   <main style={{
    backgroundImage: "url('/bg.jpg')",
    backgroundSize: "cover",
   }} className='md:block hidden  '>
     <div className='  h-screen flex flex-col  w-full text-white px-4 py-1 ' >
<div className='  w-full h-max flex justify-between  items-center '>

<LogoSectionNav/>
<RightNavbarSection user={user} authPage={authPage} homePage={homePage} />

</div>
<section className='  w-full h-full'>
  
</section>


      
    </div>
   </main>
   {/* mobile screen */}
 

 



  </>
  )
}
