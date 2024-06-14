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
        // console.log(" main image upload log->>>.",results?.info?.secure_url);
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
            open?.()
        }} className=" relative rounded-lg md:rounded-full h-40 w-40 bg-slate-200">

            {
                imagePresent?(
                  <div className=' rounded-lg md:rounded-full w-full h-full inset-0'>
                    <Image
                    className=' rounded-lg md:rounded-full'
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
               ):(
                 <p className=' text-center text-6xl h-full w-full flex items-center justify-center'>
                   +
                 </p>
               )
            }
            
     

        </section>
  
    );
  }}
</CldUploadWidget>
    </div>
  )
}
