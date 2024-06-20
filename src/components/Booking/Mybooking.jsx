"use client";
import React from 'react'
import Navbar from '@/components/utils/navbar/Navbar'
import {useState} from 'react'
import SearchBar from '../homeScreen/SearchBar';
import MobileScreenNavbar from '@/components/utils/navbar/MobileScreenNavbar'
import EmptyPage from '../utils/emptyPage/EmptyPage';
import Card from '../utils/card/Card';

export default function MyBooking({booking,user}) {
  const [toggle,setToggle]=useState(false)
  // console.log("listing detain page",listingData);
  return (
    <>
     <MobileScreenNavbar/>
     <section className=' relative flex flex-col w-full h-max '>
<Navbar user={user} homePage={true} />
   <SearchBar setToggle={setToggle}/>
   </section>

   {
        booking?.length==0? 
        
        <EmptyPage/>
        
        :
        <section className='flex absolute top-16 sm:top-24 lg:top-24 flex-col gap-4 w-screen h-max min-h-full px-6  pb-10 pt-16 md:px-12 md:py-20 overflow-x-hidden  bg-white' >

  
  
{/* text section */}
<section className=' w-full h-max flex flex-col gap-1'>
<h1 className=' font-bold text-lg md:text-2xl text-slate-800' >Based on your search result</h1>
<p className=' font-light text-sm'>
{booking?.length} results found
</p>
</section>

<div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-8  w-full '>

{
booking?.map((items)=>{
  return(
    <Card key={items.id} id={items.id} price={items.price} rating={items.rating} location={items.location} title={items.locationName} src={items.mainImageSrc}  />
  )
})

  }

</div>







  </section>  
    
   }
    
   
    </>
  )
}
