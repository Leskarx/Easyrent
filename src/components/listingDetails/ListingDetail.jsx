"use client";
import React from 'react'
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './thirdSection/ThirdSection';
import Navbar from '@/components/utils/navbar/Navbar'
import {useState} from 'react'
import SearchBar from '../homeScreen/SearchBar';
import MobileScreenNavbar from '@/components/utils/navbar/MobileScreenNavbar'

export default function ListingDetail({listingData,ownerData,currentUser}) {
  const [toggle,setToggle]=useState(false)
  // console.log("listing detain page",listingData);
  return (
    <>
     <MobileScreenNavbar/>
     <section className=' relative flex flex-col w-full h-max '>
<Navbar user={currentUser} homePage={true} />
   <SearchBar setToggle={setToggle}/>
   </section>
    
    <div className=' absolute top-24  w-full h-full'>
     <div className=' relative flex flex-col items-center w-full h-full '>
      <div className=' w-full    bg-white pt-10 px-6 md:px-0 md:pl-48 md:pr-48  '>
        <div className=' flex flex-col gap-3  w-full h-full'>

          <div className='flex justify-between items-center w-full '>
            <h1 className=' text-2xl lg:text-4xl font-semibold'>{listingData?.locationName}</h1>
            <div className=' flex justify-center items-center gap-8'>
              <p className=' underline text-sm'>Share</p>
              <p className=' underline text-sm'>Save</p>
            </div>
           
          </div>


       <FirstSection listingData={listingData} />

       <SecondSection listingData={listingData} currentUser={currentUser}  />
       <ThirdSection listingData={listingData} ownerData={ownerData} currentUser={currentUser} />

        </div>
      </div>

     </div>
    </div>
    </>
  )
}
