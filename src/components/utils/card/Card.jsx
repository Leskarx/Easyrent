import React from 'react'
import Image from 'next/image'
export default function Card({title,src}) {
  return (
   <section>
     <div className=' relative bg-white p-10 w-[290px] h-[265px] '>
        <div className=' absolute inset-0   '>

        <Image
        className=' rounded'
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
