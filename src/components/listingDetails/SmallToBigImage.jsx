import React from 'react'
import Image from 'next/image'

export default function SmallToBigImage({src,handleclick}) {
  return (
    <>
       <section className='fixed inset-0 z-20  opacity-95 w-full h-full  bg-slate-800 '>
    
            
    </section>
    <div className=' fixed z-50 inset-0'>
            <div className=' w-full h-full  flex justify-center items-center '>
             <main className=' flex flex-col gap-1   w-[50%] h-[65%] '>
             <section onClick={handleclick} className=' self-end pr-5'>
                    <p className=' text-white underline'>
                        Close
                    </p>
                </section>
                <main className=' relative w-full h-full'>
                    <div className=' inset-0'>
                        <Image src={src} alt='image' fill  priority style={{
                            objectFit:'cover'
                        }} />

                    </div>

                </main>
             </main>

            </div>

        </div>
    </>
 
  )
}
