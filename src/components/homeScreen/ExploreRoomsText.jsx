import React from 'react'
import Image from 'next/image'

export default function ExploreRoomsText({title,src}) {
  return (
    <main className=' cursor-pointer hover:shadow-black/5 hover:shadow-lg w-full rounded-lg bg-white flex  drop-shadow-xl '>
        <div className=' relative w-[130px] rounded-l-lg h-[85px]'>
            <div className=' inset-0'>
                <Image 
                className=' rounded-l-lg'
                priority
                src={src}
                alt='image'
                fill
                style={{
                    objectFit:'cover'
                }}

                />

            </div>

        </div>
        <div className=' w-full h-[85px] flex items-center pl-2 lg:pl-4 font-semibold text-sm  lg:text-base'>
        {title}
        </div>

       
        </main>
  )
}
