"use client";
import React from 'react'
import { motion } from "framer-motion"
import MscreenText from '../utils/text/MscreenText';
import Button from '../utils/Button/Button';
import { FaArrowLeft } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import LoadingScreen from '../loadingScreen/LoadingScreen';
import { usePathname } from 'next/navigation';


export default function MobileSearchBarPopout({setPopout,data,setToggle}) {
   const pathname = usePathname()
   const router=useRouter()
   const [buttonLoading,setButtonLoading] = useState(false)
   const [loadingScreen,setLoadingScreen] = useState(false)
   const {location,pinCode,setLocation,setPinCode}=data


   async function handleSubmit(){

      localStorage.setItem("locationValueStore",JSON.stringify(location))
      localStorage.setItem("pinCodeValueStore",JSON.stringify(pinCode))
      if(location!="" || pinCode!=""){
      //   setLoadingScreen(true)
      
    
        setButtonLoading(true)
  const res=await axios.post("/api/search",{location,pinCode})
  console.log("response from search",res.data)
  localStorage.setItem("searchData",JSON.stringify(res.data))
  router.push('/search')
  
   if(pathname=="/search"){
      setButtonLoading(false)
      setPopout(false)
   }
    setToggle((prev)=>(!prev ))
  
  
  
  
  
       
      //   setLoadingScreen(false)
      
      }
     
  
      
    }



  return (
   <>
   <main className=' fixed inset-0 block md:hidden bg-slate-900 opacity-75 z-[1120]'>

   </main>
 <main className=' fixed block md:hidden z-[1121]   inset-0  '>
 <main className='flex justify-center items-center  w-full h-full'>
 <motion.div 
 initial={{
    scale: 0.5,
    opacity: 0
 }}
 animate={{
    scale: 1,
    opacity: 1
 }}
 transition={{
    type: 'spring',
    stiffness: 260,
    damping: 20
 }}

 className=' w-[90%] h-max flex flex-col  items-start gap-6 bg-white rounded-lg shadow-2xl shadow-black p-4' >
   <div onClick={()=>{
      setPopout(false)
   }}>
   <FaArrowLeft size={16} />
   </div>
   <div>
      <p className=' font-semibold text-lg '>Studying outside your Home-Town?</p>
      <p className=' font-light text-sm'>Search your perfect home in seconds</p>
   </div>
    <MscreenText value={pinCode} setValue={setPinCode} title='Pincode' type='number' placeholder="Code" />
   <MscreenText value={location} setValue={setLocation} title='Location' type='text' placeholder="Where"  />
   <Button buttonTitle='Search' handleSubmit={handleSubmit} isLoading={buttonLoading} />
  



</motion.div>
 </main>
 </main>
 {
   loadingScreen && (
      <LoadingScreen />

   )
 }
   
   </>
  )
}
