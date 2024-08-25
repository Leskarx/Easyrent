"use client";
import React from 'react'
import { useRouter } from 'next/navigation';


export default function AuthpageSection() {
  const router=useRouter();
  return (
    <ul className=' flex gap-10'>
    
    <li  onClick={()=>{
      router.push('https://pages.theease.rent/legal')
    }} className=' cursor-pointer'>Legal</li>
      <li  className=' cursor-pointer'>Support</li>
      <li onClick={()=>{
      router.push('https://pages.theease.rent/about')
      }}  className=' cursor-pointer'>About Us</li>
    </ul>
  )
}
