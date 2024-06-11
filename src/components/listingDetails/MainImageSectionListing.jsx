import React from 'react'
import Image from 'next/image'
export default function MainImageSectionListing({listingData}) {
  return (
    <div className='relative w-[50%] h-full '>
    <div className='  w-full  h-full inset-0'>
                        <Image
                   className=' rounded-2xl'
                       alt='Image'
                       src={listingData?.mainImageSrc}
                       quality={100}
                       priority                                                      
                      fill 
                      style={{
                       objectFit:'cover'
                      }}
                      
    
    
                       />
                      </div>
    </div>
  )
}
