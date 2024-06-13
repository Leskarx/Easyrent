import React from 'react'
import Button from '../utils/Button/Button'
import { Calendar } from 'react-date-range'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function LargeBookingSection({toggleLarge}) {
  return (
   <>
    <main className=' fixed inset-0 bg-slate-600 z-20 opacity-90 '>

      
</main>
<main className=' fixed inset-0 z-50 flex justify-center items-center '>

    <div className='relative min-w-max  h-[60%]  px-10 py-4 bg-white rounded-xl'>
  <section className=' font-normal flex justify-center text-xl'><p>Select the starting date </p></section>
        
        
        <div className='w-full h-max'>
            <section className=' flex justify-center h-max items-center p-3'>
                <Calendar />
                </section>

          <section className=' absolute bottom-6 w-[60%] left-1/2  -translate-x-1/2 '>  <Button buttonTitle='Book' isLoading={false} handleSubmit={()=>{console.log("close clicked")}} /></section>
        </div>
        <div onClick={toggleLarge} className=' absolute -top-10 text-white underline right-14 cursor-pointer'>
            <p>Close</p>
        </div>

    </div>


</main>

   </>
  )
}
