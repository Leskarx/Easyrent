"use client"
import React from 'react'
import Image from 'next/image'
import { RiArrowRightSLine } from "react-icons/ri";

export default function DiscoverPrime() {
  return (
    <div className='flex flex-col gap-4  w-full'>
        <h4 className=' font-bold text-2xl text-slate-800'>Explore our new Prime Rooms</h4>

        <div className='relative w-full h-[310px]' >
            <div className='inset-0 absolute '>
                <Image
                className=' rounded'
                alt='Image'
                src={'/Rectangle 5.jpg'}
                priority
                quality={100}
                fill
                style={{
                    objectFit:'cover'
                }}
                />
                

            </div>

            <section className=' absolute left-1/2 -translate-x-1/2  z-50
            flex gap-4 flex-col justify-center items-center 
            top-1/2 -translate-y-1/2 
            '>
                <Image
                className=' ml-40'
                alt='logo'
                src={'/Frame 5.png'}
                height={300}
                width={300}
                quality={100}
                priority

                />
                <button className=' font-semibold text-sm text-slate-900 bg-white rounded-md px-4 py-3 gap-8 flex text-center '>
                DISCOVER PRIME ROOMS
                <RiArrowRightSLine size={20} />
                </button>



            </section>

            

        </div>
     
    </div>
  )
}
