"use client";
import React from 'react'
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './thirdSection/ThirdSection';
import Navbar from '@/components/utils/navbar/Navbar'
import {useState} from 'react'
import SearchBar from '../homeScreen/SearchBar';
import MobileScreenNavbar from '@/components/utils/navbar/MobileScreenNavbar'
import { CiHeart } from "react-icons/ci";
import { IoShareOutline } from "react-icons/io5";
import Footer from '../mainBackground/Footer';

export default function ListingDetail({listingData,ownerData,currentUser}) {
  const [toggle,setToggle]=useState(false)
  // console.log("listing detain page",listingData);
  return (
    <>
     <MobileScreenNavbar user={currentUser}/>
     <section className=' relative flex flex-col w-full h-max '>
<Navbar user={currentUser} homePage={true} />
   <SearchBar setToggle={setToggle}/>
   </section>
    
    <div className=' absolute top-24  w-full h-full'>
     <div className=' relative flex flex-col items-center w-full h-full '>
      <div className=' w-full    bg-white py-10  px-6 md:px-0 md:pl-48 md:pr-48  '>
        <div className=' flex flex-col gap-3  w-full h-full'>

          <div className='flex justify-between items-center w-full '>
            <h1 className=' text-2xl lg:text-4xl font-semibold'>{listingData?.locationName}</h1>
            <div className=' flex justify-center items-center gap-8'>
              <p className='cursor-pointer underline flex items-center justify-center gap-1 text-sm'>  <IoShareOutline size={17} /> Share</p>
              <p className='cursor-pointer flex items-center justify-center gap-1 underline text-sm'> <CiHeart size={17}/> Save</p>
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
