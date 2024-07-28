"use client"
import React from 'react'
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useState } from 'react';

export default function AddphotosListing({setValue,id,getValues}) {
  const [imagePresent,setImagePresent]=useState(false)
  const [src,setSrc]=useState("")
 
     async function handleUpload(results){
      const newSrc = results?.info?.secure_url;
      setSrc(newSrc);
      setImagePresent(true);
         const images=getValues(id)
         if(images==undefined||images.length==0){
            setValue(id,[results?.info?.secure_url])

         }else{
            setValue(id,[...getValues(id),results?.info?.secure_url])

         }
         const oldImageId = src?.split('/').pop().split('.')[0];
         if (oldImageId) {
           await fetch('/api/deleteImage', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json',
             },
             body: JSON.stringify({ imageId: oldImageId }),
           });
         }
        

// console.log("images display",getValues(id));
         


         
         
     }

  return (
    <div>
     <CldUploadWidget options={{
        maxFiles:1
     }} onUpload={handleUpload}
     onSuccess={(results)=>{
        // console.log(results);
     }}
     uploadPreset="ml_default">


  {({ open }) => {
    return (
      <div onClick={()=>{
        if (open) {
          open();
        } else {
          console.error("Upload widget could not be opened.");
        }
      }} className=' relative cursor-pointer h-12 w-12 bg-slate-200 rounded-lg'>


        {imagePresent?(
          <div className='  inset-0  rounded-lg absolute h-full w-full '>

<Image
className=' rounded-lg object-cover'
alt='Image '
quality={100}
priority
fill
src={src}

/>

          </div>
          
        ):(
          <p className=' text-center text-2xl h-full w-full flex items-center justify-center'>
            +
          </p>
        )}
      
      </div>
  
    );
  }}
</CldUploadWidget>
    </div>

  )
}
