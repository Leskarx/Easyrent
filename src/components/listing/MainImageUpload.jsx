"use client"
import React from 'react'
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useState } from 'react';


export default function MainImageUpload({setValue}) {
 const [imagePresent,setImagePresent]=useState(false)
 const [src,setSrc]=useState("")

    function handleUpload(results){
        setSrc(results?.info?.secure_url)
        setImagePresent(true)
        setValue("mainImageSrc",results?.info?.secure_url)
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
        <section onClick={()=>{
            open()
        }} className=" relative rounded-full h-40 w-40 bg-green-900">

            {
                imagePresent && (
                   <div className=' bg-red-500 rounded-full w-full h-full inset-0'>
                     <Image
                     className=' rounded-full'
                    alt='Image'
                    src={src}
                    quality={100}
                    priority                                                      
                   fill 
                   style={{
                    objectFit:'cover'
                   }}
                   


                    />
                   </div>
                )
            }
            
     

        </section>
  
    );
  }}
</CldUploadWidget>
    </div>
  )
}
