"use client";
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import AlreadySection from '../utils/section/AlreadySection';
import OtherLogin from '../utils/OtherLogin';
import LoadingScreen from '../loadingScreen/LoadingScreen';

export default function GettingStart() {
  const [loadingScreen, setLoadingScreen] = useState(false);

  return (
   <>
   {
    loadingScreen && <LoadingScreen/>
   }
    <div className='md:hidden z-50 p-4 w-full h-screen flex flex-col pt-0   bg-white'>
<div className=' w-full flex flex-col gap-16 '>
<section className=' w-full flex flex-col gap-3'>
        <Image
        // style={{
        //   height:"auto",
        //   width:"auto"
        // }}
       
        src={"/LOGO_BLACK.svg"}
        width={200}
        height={200}
        priority
        quality={100}
        alt="logo"
        />
      

      </section>
      
      <div className=' absolute top-[23%] text-2xl leading-8  text-left w-full flex flex-col gap-0 stroke-1'>
       <p className='  '>
          Welcome to
        </p>
        <p className=' font-semibold text-5xl'>
        EASERENT
        </p>
        <p className='  text-lg w-full'>Login now to get your next Perfect Home. </p>
       </div>

      <section className=' absolute top-[45%] left-auto  w-full flex flex-col gap-8 p-4 '>
<p className=' font-semibold text-xl '>Let’s Get Started...</p>
<OtherLogin setLoadingScreen={setLoadingScreen} des="Continue with Google"/>
<AlreadySection setLoadingScreen={setLoadingScreen} link='/login' des="Already had an account?" buttonTitle="Login"/>
      </section>
  
     
</div>

      
    </div>
   
   </>
  )
}
