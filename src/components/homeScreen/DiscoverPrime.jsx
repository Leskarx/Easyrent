"use client"
import React from 'react'
import Image from 'next/image'
import { RiArrowRightSLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";

export default function DiscoverPrime() {
  return (
    <div className='flex flex-col gap-4  w-full'>
        <h4 className=' lg:font-bold font-semibold text-xl lg:text-2xl text-slate-800'>Explore our new Prime Rooms</h4>

        <div className='relative w-full h-[240px]  lg:h-[310px]' >
            <div className='inset-0 absolute '>
                <Image
                className=' rounded'
                alt='Image'
                src={'/explorePrime.jpg'}
                priority
                quality={100}
                fill
                style={{
                    objectFit:'cover'
                }}
                />
                

            </div>
            <div className=' absolute text-red-500 top-1/2 -translate-y-[65%] left-1/2 -translate-x-1/2'>
           <div className=' lg:hidden block'>
           <IoHome size={68} />
           </div>
           <div className=' hidden lg:block'>
           <IoHome size={100} />

           </div>

            </div>

            <button className=' absolute bottom-[20%]  left-1/2 -translate-x-1/2 font-semibold text-sm text-slate-900 bg-white rounded-md px-4 py-3 gap-8 w-max flex text-center '>
                DISCOVER PRIME ROOMS
                <RiArrowRightSLine size={20} />
                </button>

            

        </div>
     
    </div>
  )
}
