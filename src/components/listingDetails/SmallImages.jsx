"use client";
import React from 'react'
import Image from 'next/image'
import { useState,useContext} from 'react'
import SmallToBigImage from './SmallToBigImage';

export default function SmallImages({src}) {
    const [isLageImage,setIsLargeImage]=useState(false)
    const handleclick=()=>{
        setIsLargeImage(!isLageImage)
    }


  return (
  <>
  {
    isLageImage && (
     <SmallToBigImage src={src} handleclick={handleclick} />
    )
  }
  
  
  <div onClick={handleclick} className='relative overflow-hidden rounded-lg  h-28 w-36'>
        
        <div className='  inset-0 rounded-lg overflow-hidden'>
        <Image className=' hover:scale-110 transition  rounded-lg' src={src} alt='images' fill priority  style={{
            objectFit:'cover'
        }} />
        </div>
       

      
    </div>
  </>
  )
}
