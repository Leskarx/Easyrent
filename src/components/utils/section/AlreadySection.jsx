"use client";
import React from 'react'
import { useRouter } from 'next/navigation';

export default function AlreadySection({link="/",des,buttonTitle,setLoadingScreen}) {
  const router = useRouter();
  return (
    <section className=' self-center font-normal md:font-medium md:text-sm text-xl  w-max '>
        <p>
       {des}
      <span onClick={()=>{
        setLoadingScreen(true);
        router.push(link);
      }} className=' cursor-pointer underline text-red-600 '> 
       {buttonTitle}
       </span>
        </p>
      </section>
  )
}
