"use client"
import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import OtherLogin from '../OtherLogin';
import { useRouter } from 'next/navigation';
import Button from '../Button/Button';



export default function MainSection({title,para,body,buttonTitle,handleSubmit,footer,showGprovider,isLoading}) {
  const router=useRouter()
  return (
    <div className=' absolute top-1/2 -translate-y-1/2 min-h-screen md:min-h-[30%] md:w-[30%] w-full bg-white rounded-lg shadow-4xl drop-shadow-2xl flex justify-between  '>
<main className=' p-3 md:pt-2 pt-4  h-max  w-full  rounded-lg shadow-4xl flex flex-col md:justify-between justify-around gap-7    '>

      {/* button section */}
      <section onClick={()=>{
        router.back()
      }} className=' block md:hidden'>
<FaArrowLeftLong/>
      </section>
    <div className=' w-full flex flex-col gap-2'>
    <p className=' font-semibold text-2xl'>
       {title}
       </p>
       <p className='max-w-[70%] md:max-w-[70%] text-sm'>
        {para}
       </p>
    </div>

       <div className=' w-full'>
        {body}
       </div>

     <div className=' w-full flex flex-col gap-3'>
     
<Button isLoading={isLoading} handleSubmit={handleSubmit} buttonTitle={buttonTitle} />


       {
        showGprovider&&(
          <OtherLogin des="Continue with google"/>
        )
       }
      
     </div>

      
        {footer}

</main>
    


     
    </div>
  )
}
