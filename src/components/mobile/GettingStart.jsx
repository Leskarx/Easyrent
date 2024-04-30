"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import AlreadySection from '../utils/section/AlreadySection';
import OtherLogin from '../utils/OtherLogin';

export default function GettingStart() {
  return (
    <div className='md:hidden z-50 p-4 w-full h-screen flex flex-col pt-24   bg-white'>
<div className=' w-full flex flex-col gap-16 '>
<section className=' w-full flex flex-col gap-3'>
        <Image
        // style={{
        //   height:"auto",
        //   width:"auto"
        // }}
       
        src={"/Frame 5.png"}
        width={250}
        height={200}
        priority
        quality={100}
        alt="logo"
        />
       <div className=' text-2xl leading-8  text-left w-full flex flex-col gap-0 stroke-1'>
       <p className='  '>
          Welcome to
        </p>
        <p className=' font-semibold text-5xl'>
        EASYRENT
        </p>
        <p className='  text-xl'>Login now to get your next Perfect<br/> Home. </p>
       </div>

      </section>
      <section className='  w-full flex flex-col gap-8 '>
<p className=' font-semibold text-xl'>Let’s Get Started...</p>
<OtherLogin des="Continue with Google"/>

      </section>
     <AlreadySection link='/login' des="Already had an account?" buttonTitle="Login"/>
     
</div>

      
    </div>
  )
}
