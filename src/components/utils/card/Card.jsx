import React from 'react'
import Image from 'next/image'
import Heartbutton from '@/components/heartButton/Heartbutton'
export default function Card({title,src}) {
  return (
   <section className='col-span-1 cursor-pointer group  '>
   <div className="flex flex-col  justify-center items-center gap-2 w-full">
   <div className=' relative rounded-xl w-full aspect-square  overflow-hidden '>
      

      <Image
      className=' object-cover  w-full h-full rounded-lg group-hover:scale-110 transition duration-300 ease-in-out'
      src={src||"/Frame 5.png"} 
      
      alt='Image'
     fill
      quality={100}
      priority                                                      
  
  
      /> 

<div className=' absolute top-3  right-3'>
<Heartbutton/>
</div>
     
     
    
  </div>
   </div>
   </section>
  )
}
