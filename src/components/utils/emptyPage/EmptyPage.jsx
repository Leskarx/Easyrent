import React from 'react'

export default function EmptyPage({otherPage=false}) {
  return (
    <section className={` ${otherPage?"md:top-24 ":"md:top-72 "}  flex absolute top-16 sm:top-24 flex-col gap-4 w-screen h-full px-6  pb-10 pt-16 md:px-12 md:py-20  bg-white`} >

  
  
    {/* text section */}
    <section className=' w-full h-max flex flex-col justify-center items-center gap-1'>
    <h1 className=' font-bold text-2xl text-slate-800' >No data to Show</h1>
    <p className=' font-light text-sm'>
      Explore the best PG and rent houses in your city
    </p>
    </section>
    
    
    
    
    
    
    
    
      </section> 
  )
}
