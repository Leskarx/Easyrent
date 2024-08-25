'use client';
import React from 'react'
import Image from 'next/image'
import { useState} from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function SmallToBigImage({handleclick,array,index}) {
 const [mainIndex,setMainIndex]=useState(index);
    const [src,setSrc]=useState(array[mainIndex]);
    const arrowSize=32;
    function arrowClick(direction){
       
        if(direction==='right'){
            if(mainIndex===array.length-1){
                setMainIndex(0)
                setSrc(array[0])
            }else{
                setMainIndex(mainIndex+1)
                setSrc(array[mainIndex+1])
            }
        }else{
            if(mainIndex===0){
                setMainIndex(array.length-1)
                setSrc(array[array.length-1])
            }else{
                setMainIndex(mainIndex-1)
                setSrc(array[mainIndex-1])
            }
        }
        
    }


  return (
    <>
       <section className=' cursor-none  fixed inset-0 z-20 opacity-95 w-full h-full  bg-slate-800 '>
    
            
    </section>
    <div className=' fixed z-50 inset-0'>
            <div className=' w-full h-full flex justify-center items-center '>
             <main className='relative flex flex-col gap-1 w-[90%] md:w-[50%] h-[80%] md:h-[65%] '>
                {/* right arrow */}
                <div onClick={()=>{
                    arrowClick('right')
                }} className='cursor-pointer absolute right-0 z-[60] md:-right-28 top-1/2 p-2 bg-black/25 -translate-y-1/2 text-white'>
                <IoIosArrowForward size={arrowSize} />
                </div>
                {/* left arrow */}
                <div onClick={()=>{
                    arrowClick('left')
                }} className='cursor-pointer absolute left-0 z-[60] md:-left-28 top-1/2 p-2 bg-black/25 -translate-y-1/2 text-white'>
                <IoIosArrowBack size={arrowSize} />
                </div>
             <section onClick={handleclick} className=' self-end pr-5'>
                    <p className='cursor-pointer text-white underline'>
                        Close
                    </p>
                </section>
                <main className='relative w-full h-full'>
                    <div className='inset-0'>
                        <Image src={src} alt='image' fill  priority style={{
                            objectFit:'cover'
                        }} />

                    </div>

                </main>
             </main>

            </div>

        </div>
    </>
 
  )
}
