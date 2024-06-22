"use client"
import React from 'react'
import SearchBar from '@/components/homeScreen/SearchBar'

import Card from '@/components/utils/card/Card'

import Navbar from '@/components/utils/navbar/Navbar'
import MobileScreenNavbar from '@/components/utils/navbar/MobileScreenNavbar'
import MobileScreenNavWithSearch from '@/components/utils/navbar/MobileScreenNavWithSearch'
import { useEffect,useState } from 'react'
import EmptyPage from '../utils/emptyPage/EmptyPage'

export default function SearchPage({user}) {
    const [listing,setListing]=useState([])
    const [toggle,setToggle]=useState(false)
    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem("searchData"))
        setListing(data)

    },[toggle])
    


  console.log("hehehh",listing.data)
  return (
    <div className={` block     w-full  `}>

     <MobileScreenNavbar/>

     
<section className=' relative flex flex-col w-full h-max '>
<Navbar user={user} homePage={true} />
   <SearchBar setToggle={setToggle}/>
   </section>
   {
        listing?.data?.length==0? 
        
        <EmptyPage/>
        
        :
        <section className='flex absolute top-16 sm:top-24 md:top-72 flex-col gap-4 w-screen h-max min-h-full px-6  pb-10 pt-16 md:px-12 md:py-20  bg-white' >

  
  
{/* text section */}
<section className=' w-full h-max flex flex-col gap-1'>
<h1 className=' font-bold text-lg md:text-2xl text-slate-800' >Based on your search result</h1>
<p className=' font-light text-sm'>
{listing?.data?.length} results found
</p>
</section>

<div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8  w-full '>

{
listing?.data?.map((items)=>{
  return(
    <Card key={items.id} type={items.type} id={items.id} price={items.price} rating={items.rating} location={items.location} title={items.locationName} src={items.mainImageSrc}  />
  )
})

  }

</div>







  </section>  
    
   }




    </div>
  )
}
