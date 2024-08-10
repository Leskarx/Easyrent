"use client";
import React from 'react'
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './thirdSection/ThirdSection';
import Navbar from '@/components/utils/navbar/Navbar'
import toast from 'react-hot-toast';
import {useState} from 'react'
import SearchBar from '../homeScreen/SearchBar';
import axios, { AxiosHeaders } from 'axios';
import MobileScreenNavbar from '@/components/utils/navbar/MobileScreenNavbar'
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";
import LoadingScreen from '../loadingScreen/LoadingScreen';
import { useRouter } from 'next/navigation';
import EmptyPage from '../utils/emptyPage/EmptyPage';



  

export default function ListingDetail({listingData,ownerData,currentUser}) {
  const router=useRouter()

  // console.log("isBooked..........>",isBooked); 


  let isFav=false
  currentUser?.favroiteIds?.find((id)=>(id==listingData.id)?isFav=true:isFav=false)

  const [isSaved,setIsSaved]=useState(isFav)
  const [loading,setIsloading]=useState(false)

  const [toggle,setToggle]=useState(false)
  async function toggleSaved(){
    setIsloading(true)
    if(!currentUser){
      router.push('/login')
      return;
    }
    
    const res=await axios.post('/api/toggleSave',{listingId:listingData.id,
      userId:currentUser?.id
    })
    console.log("res............>",res.data);
    if(res.data.success && !isSaved){

      toast.success('Saved')
    }
    if(res.data.success && isSaved){
      
      toast.success('Removed from saved')
    }
    setIsloading(false)
    setIsSaved(!isSaved)
  }
  // console.log("listing detain page",listingData);
  return (
    <>
     {
      loading && <LoadingScreen/>

    }
     <MobileScreenNavbar user={currentUser}/>
     <section className=' relative flex flex-col w-full h-max '>
<Navbar user={currentUser} homePage={true} />
   <SearchBar setToggle={setToggle}/>
   </section>
    
    <div className=' absolute top-24  w-full h-full'>
     <div className=' relative flex flex-col items-center w-full h-full '>
      <div className=' w-full    bg-white py-10  px-6 md:px-0 md:pl-48 md:pr-48  '>
       {
        (listingData!=null)? <div className=' flex flex-col gap-3  w-full h-full'>

        <div className='flex justify-between items-center w-full '>
          <h1 className=' text-2xl lg:text-4xl font-semibold'>{listingData?.locationName}</h1>
          <div className=' flex justify-center items-center gap-8'>
            <p onClick={()=>{
             if(window!==undefined){
              navigator.clipboard.writeText(window.location.href)
              toast.success('Link copied')
             }

            }} className='cursor-pointer underline flex items-center justify-center gap-1 text-sm'>  <IoShareOutline size={17} /> 
            Share
            </p>
            
            <p onClick={toggleSaved} className='cursor-pointer flex items-center justify-center gap-1 underline text-sm'> 
            
            {
              isSaved?
              <AiFillHeart size={17} color='red' />
              :
              <AiOutlineHeart size={17} />
            }
            
             Save</p>


          </div>
          
        </div>


     <FirstSection listingData={listingData} />

     <SecondSection listingData={listingData} currentUser={currentUser}  />
     <ThirdSection listingData={listingData} ownerData={ownerData} currentUser={currentUser} />
    
      </div>:<div className=' h-screen'>
      <section className=' w-full h-max flex flex-col justify-center items-center gap-1'>
    <h1 className=' font-bold text-2xl text-slate-800' >No data to Show</h1>
    <p className=' font-light text-sm'>
      Explore the best PG and rent houses in your city
    </p>
    </section>
    
      </div>
       }
        
      </div>

     </div>
    </div>
   
    </>
  )
}
