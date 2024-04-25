"use client"
import React from 'react'
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useState } from 'react';

export default function AddphotosListing({setValue,id}) {
  const [imagePresent,setImagePresent]=useState(false)
  const [src,setSrc]=useState("")
 
     function handleUpload(results){
         setSrc(results?.info?.secure_url)
         setImagePresent(true)
         setValue(id,results?.info?.secure_url)
         console.log(" main image upload log->>>.",results?.info?.secure_url);
     }

  return (
    <div>
     <CldUploadWidget options={{
        maxFiles:1
     }} onUpload={handleUpload}
     onSuccess={(results)=>{
        console.log(results);
     }}
     uploadPreset="ml_default">


  {({ open }) => {
    return (
      <div onClick={()=>{
        open()
      }} className=' relative cursor-pointer h-12 w-12 bg-slate-600 rounded-lg'>


        {imagePresent && (
          <div className=' bg-red-700 inset-0  rounded-lg absolute h-full w-full '>

<Image
className=' rounded-lg object-cover'
alt='Image '
quality={100}
priority
fill
src={src}

/>

          </div>
          
        )}
      
      </div>
  
    );
  }}
</CldUploadWidget>
    </div>

  )
}
