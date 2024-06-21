"use client"; 
import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { IoMdChatbubbles } from "react-icons/io";
import { IoMdChatboxes } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'

export default function MobileScreenNavbar() {
  const pathname = usePathname()
  const router = useRouter();
  console.log("pathname.........>",pathname)
  function clickHome(){
    router.push('/')
  }
  return (
    <div className=" relative w-full h-full block md:hidden    ">
        <section className=' fixed   w-[240px] h-[50px] bg-slate-300 backdrop-blur-[0.3rem] bg-opacity-80    rounded-full shadow-lg shadow-black/[0.03] border-2 border-opacity-65    left-1/2 -translate-x-1/2  bottom-2 z-[100] text-black '>


     
        </section>
        <main className=' fixed left-1/2 -translate-x-1/2  bottom-2 z-[1001] w-[240px] h-[50px] p-6 flex justify-between items-center'>
        
      <MobileBsection Icon={IoMdChatboxes} size={38} />
      <MobileBsection Icon={MdHomeFilled} onclick={clickHome} colour={`${(pathname=="/")?"red":"black"}`}/>
      <MobileBsection Icon={TiThMenu} size={38}/>
      
     </main>
        <main style={{
    backgroundImage: "url('/bg.jpg')",
    backgroundSize: "cover",
   }}  className='  block md:hidden  w-full h-max py-10 text-white'>
            

        </main>


        
       </div>
  )
}

function MobileBsection({Icon,size=46,colour='black',onclick=()=>{}}) {
  return (
  
    <div onClick={onclick} className=' active:scale-105 h-full flex justify-center items-center'>
     <Icon size={size} color={colour} />
      
    </div>
  )
}
