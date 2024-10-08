"use client"; 
import React,{useState} from 'react'
import { MdHomeFilled } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { IoMdChatboxes } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion';
import { TiArrowLeftThick } from "react-icons/ti";
import { AnimatePresence } from 'framer-motion';
import { NavImage } from './ProfileSectionNavbar';
import { signOut } from 'next-auth/react';
import LoadingScreen from '@/components/loadingScreen/LoadingScreen';

export default function MobileScreenNavbar({user,hidebanner=false}) {
  const [showMenu, setMenu] = useState(false)
  const [loading, setLoading] = useState(false)
  const [Menuloading, SetMenuloading] = useState(false)
  const pathname = usePathname()
  const router = useRouter();
 
  function clickMenu(){
    setMenu(true)

  }


  function clickHome(){
    if(pathname=="/") return
    setLoading(true)
    router.push('/')
  }
  return (
    <>
    {
      loading && (
        <LoadingScreen/>
      )
    }
     {
      Menuloading && (
        <LoadingScreen/>
      )
    }
    <div className=" relative w-full h-full block md:hidden    ">
        <section className=' fixed   w-[140px] h-[40px] bg-slate-300 backdrop-blur-[0.3rem] bg-opacity-80    rounded-full shadow-lg shadow-black/[0.03] border-2 border-opacity-65    left-1/2 -translate-x-1/2  bottom-2 z-[100] text-black '>


     
        </section>
        <main className=' fixed  left-1/2 -translate-x-1/2  bottom-1 z-[1001] w-[160px] h-[40px] p-6 flex justify-between items-center'>
        
      <MobileBsection Icon={IoMdChatboxes} size={28} />
      <MobileBsection Icon={MdHomeFilled} onclick={clickHome} colour={`${(pathname=="/")?"red":"black"}`}/>
      <MobileBsection Icon={TiThMenu} onclick={clickMenu} size={28}/>
      
     </main>
        <main style={{
    backgroundImage: "url('/bg.jpg')",
    backgroundSize: "cover",
   }}  className={` ${hidebanner?"hidden":" block md:hidden"}   w-full h-max py-10 text-white`}>
            

        </main>


        
       </div>
       <AnimatePresence>
       {
        showMenu &&(
          <ShowMenu SetMenuloading={SetMenuloading}  showMenu={showMenu} user={user} setMenu={setMenu}/>

        )

       }

       </AnimatePresence>
     
    </>
  )
}


function ShowMenu({user,SetMenuloading,setMenu=()=>{}}){
  return (
   <>
   
      
             <main className=' md:hidden block'>
             <main  className='z-[1002]  top-0 flex justify-end  fixed w-screen h-screen text-black'>
              
          
              <motion.main 
              className=' relative w-[60%] h-full '
           initial={{x:'100%'}}
           animate={{x:"3%"}}
           exit={{x:'100%'}}
           transition={{
             duration:0.2,
             type:"tween",
        
           }}
          >
        <section className=' absolute  w-full h-full bg-white/65 backdrop-blur-[0.6rem]  '>
        
        </section>
        <main className='absolute inset-0 right-0 flex flex-col gap-6   '>
        <div className='  w-full p-2  '>
        <div onClick={()=>{
         setMenu(false)
        }}>
        <TiArrowLeftThick size={22}/> 
        </div>
        
        
        </div>
       
{
  user ?(
    // user present
    <section>
<div className=' w-full h-max flex justify-center py-2 border-b-2'>
       <NavImage user={user} mobile/>
       </div>

      <main className=' flex flex-col gap-6 pt-4'>
      <MenuText SetMenuloading={SetMenuloading} link='/profile' text="Profile"/>
        <MenuText SetMenuloading={SetMenuloading} link='/myfavourite' text="My favourite"/>
        <MenuText SetMenuloading={SetMenuloading} link='/mybooking' text="My booking"/>
        <MenuText SetMenuloading={SetMenuloading} link='/addproperty' text="Add properties"/>
        <MenuText SetMenuloading={SetMenuloading} link='/manageproperties' text="Manage properties"/>
        <MenuText SetMenuloading={SetMenuloading} link='https://pages.theease.rent/about' text="About us"/>
        <div onClick={()=>{
signOut()
        }}>
        <MenuText text="Log out"/>
        </div>
      </main>

         
         
</section>
  ):(
    // user not present
    <section>
      <div className=' w-full h-max flex justify-center py-2 border-b-2'>
       <NavImage user={user} mobile/>
       </div>

 <section className=' flex flex-col gap-6 pt-4'>
 <MenuText SetMenuloading={SetMenuloading} link='/signup' text="Sign Up"/>
        <MenuText SetMenuloading={SetMenuloading} link='/login' text="Login"/>
        <MenuText SetMenuloading={SetMenuloading} link='https://pages.theease.rent/about' text="About us"/>
 </section>
      

         
         
</section>
  )

}


        </main>
        
        
        
        
           </motion.main>
            )
      

</main>
             </main>
  
   
    
  
   
   </>
   



  )
}



function MobileBsection({Icon,size=30,colour='black',onclick=()=>{}}) {
  return (
  
    <div onClick={onclick} className=' active:scale-105 h-full flex justify-center items-center'>
     <Icon size={size} color={colour} />
      
    </div>
  )
}

function MenuText({text,link="",SetMenuloading=()=>{}}){
  const pathname = usePathname()
  const router = useRouter()
  return (
    
   <>
    <div onClick={()=>{
      SetMenuloading(true)
      router.push(link)
      if(pathname==link){
        SetMenuloading(false)
      }
    }} className='  font-semibold w-full py-2 pl-10 border-b-2'>
      {text}
    </div>
   
   </>
   
  )
}
