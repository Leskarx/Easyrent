import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import OtherLogin from './OtherLogin';

export default function MainSection({title,para,body,buttonTitle,handleSubmit,footer,showGprovider}) {
  return (
    <div className=' min-h-screen md:min-h-[30%] md:w-[30%] w-full bg-white rounded-lg shadow-4xl flex justify-between  '>
<main className=' p-3 md:pt-2 pt-4  h-max  w-full  rounded-lg shadow-4xl flex flex-col md:justify-between justify-around gap-7    '>

      {/* button section */}
      <section className=' block md:hidden'>
<FaArrowLeftLong/>
      </section>
    <div className=' w-full flex flex-col gap-2'>
    <p className=' font-semibold text-2xl'>
       {title}
       </p>
       <p className='max-w-[70%] md:max-w-[50%] text-sm'>
        {para}
       </p>
    </div>

       <div className=' w-full'>
        {body}
       </div>

     <div className=' w-full flex flex-col gap-3'>
     <button className=' rounded-lg w-full p-4 bg-red-500 text-white text-center '  onClick={handleSubmit}>
{buttonTitle}
       </button>
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
