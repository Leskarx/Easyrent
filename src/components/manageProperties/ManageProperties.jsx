"use client";
import React, { useEffect } from 'react'
import Navbar from '@/components/utils/navbar/Navbar'
import {useState} from 'react'
import MobileScreenNavbar from '@/components/utils/navbar/MobileScreenNavbar'
import EmptyPage from '../utils/emptyPage/EmptyPage';
import Card3 from '../utils/card/Card3';
import { useRouter } from 'next/navigation';
import { TiArrowLeftThick } from "react-icons/ti";
import LoadingScreen from '../loadingScreen/LoadingScreen';
import CancelLargeSection from '../Booking/CancelLargeSection';

export default function ManageProperties({booking,user}) {
    const router=useRouter()

  const [toggle,setToggle]=useState(false)
  const [loadingScreen,setLoadingScreen]=useState(false)
  useEffect(()=>{
    router.refresh()

  },[])

  return (
    <>
    {
      loadingScreen && <LoadingScreen/>

    }
   
    <div className=' w-full'>
      
     <MobileScreenNavbar user={user} hidebanner/>
     <section className=' relative flex flex-col w-full h-max '>
<Navbar user={user} homePage={true} />
  
   </section>

   {
        (!booking || booking?.length==0)? 
        
        <EmptyPage otherPage={true}/>
        
        :
        <section className='flex  absolute top-4 sm:top-4 md:top-24 flex-col gap-4 w-full h-max min-h-screen px-6  pb-16 pt-1 md:px-10 md:py-6 overflow-x-hidden  bg-white' >

  <div onClick={()=>{
    setLoadingScreen(true)

    router.back()
  }} className=' block md:hidden'>
  <TiArrowLeftThick size={20}/>
  </div>
  
{/* text section */}
<section className=' w-full h-max flex flex-col gap-1'>
<h1 className=' font-bold text-lg md:text-2xl text-slate-800' >Manage your properties</h1>
<p className=' font-light text-sm'>
    Add delete or edit your properties

</p>
<main className=' w-full h-max py-6 flex gap-4 items-center justify-center text-sm md:text-base font-semibold  '>
    <div className=' cursor-pointer  shadow-md shadow-black/45 rounded-lg w-[50%] md:w-[40%] border-t-2 text-center py-4'>
        Show Properties
    </div>
    <div className=' cursor-pointer shadow-md h-full shadow-black/45 border-t-2 rounded-lg w-[50%] md:w-[40%] text-center py-4'>
        Show Request
    </div>
</main>

</section>

<div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  w-full '>

{
booking?.map((items)=>{
  return(
    <Card3 key={items.id} isAvilable={items.available}   id={items.id} price={items.price} rating={items.rating} location={items.location} title={items.locationName} src={items.mainImageSrc}   />
  )
})

  }

</div>







  </section>  
    
   }
    
   
    </div>
    </>
  )
}
