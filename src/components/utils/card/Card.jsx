import React from 'react'
import Image from 'next/image'
export default function Card({title,src}) {
  return (
   <section className=' flex justify-center w-full'>
     <div className=' relative rounded-lg w-[290px] h-[265px] '>
        <div className=' absolute inset-0   '>

        <Image
        className=' rounded-lg'
        src={src||"/Frame 5.png"} 
        
        alt='Image'
       fill
        quality={100}
        priority                                                      
    
       style={{
        objectFit:'cover'
       }}
        /> 
        </div>
       
      
    </div>
   </section>
  )
}
