
import React from 'react'
import { getPractice } from '@/actions/nextAuthActions/getPractice'

 export default async function SearchBar() {

  const practice= await getPractice()
  console.log("pipeline data................",practice);

  return (
   <main>
     {/* <div className=' p-6 z-[200] border-2 border-black h-max bg-white w-max'>
        <h1>Studying outside your Home-Town?</h1>
        <label htmlFor="location">Location</label>
        <input type="text" className='outline-none border border-slate-600 p-3 rounded-lg' />
        <button className=' bg-red-500 px-6 py-2 rounded-xl'>Search</button>

      
    </div> */}

    <section className='absolute -top-12 shadow-black/25 drop-shadow-xl shadow-lg rounded-lg left-1/2 -translate-x-1/2 bg-white h-[70px]  block md:hidden z-[200] w-[88%] p-2'>
     <main className=' w-full h-full flex gap-4   '>
     <div  className=' w-full h-full rounded-lg border border-slate-600 '>

</div>
     </main>

    </section>
   </main>
  )
}
