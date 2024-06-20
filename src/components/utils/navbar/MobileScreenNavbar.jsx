import React from 'react'

export default function MobileScreenNavbar() {
  return (
    <div className=" relative w-full h-full block md:hidden    ">
        <section className=' fixed   w-[160px] h-[40px] bg-slate-300 backdrop-blur-[0.3rem] bg-opacity-80    rounded-full shadow-lg shadow-black/[0.03] border-2 border-opacity-65    left-1/2 -translate-x-1/2  bottom-2 z-[100] text-black'> 
      
        </section>
        <main style={{
    backgroundImage: "url('/bg.jpg')",
    backgroundSize: "cover",
   }}  className='  block md:hidden  w-full h-max py-10 text-white'>
            

        </main>


        
       </div>
  )
}
