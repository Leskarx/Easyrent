"use client";
import React from 'react'

import { useRouter } from 'next/navigation'

import LogoSectionNav from './LogoSectionNav';
import RightNavbarSection from './RightNavbarSection';


export default function Navbar({user,authPage=false,homePage=false}) {
  const router=useRouter();
  return (
  <>
   <main style={{
    backgroundImage: "url('/bg.jpg')",
    backgroundSize: "cover",
   }} className='md:block hidden w-full  '>
     <div className='  h-screen flex flex-col  w-full text-white px-4 py-1 ' >
<div className='  w-full h-max flex justify-between  items-center '>

<LogoSectionNav/>
<RightNavbarSection user={user} authPage={authPage} homePage={homePage} />

</div>



      
    </div>
   </main>
   {/* mobile screen */}
 

 



  </>
  )
}
