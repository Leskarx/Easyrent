"use client";
import React from 'react'
import { getPractice } from '@/actions/nextAuthActions/getPractice'
import MobileSearchBar from './mobileSearchBar';
import MscreenSearchBar from './MscreenSearchBar';
import { useState,useEffect } from 'react';


 export default  function SearchBar({home=false}) {
  const [location, setLocation] = useState("")
  const [pinCode, setPinCode] = useState("")
  if(home){
    useEffect(()=>{
      localStorage.clear()
    })

  }

  // console.log(`locationValueStore`,locationValueStore);
  useEffect(()=>{
   const locationLocalValue= JSON.parse(localStorage.getItem("locationValueStore"))
    if(locationLocalValue){
      setLocation(locationLocalValue)
     
    }
    const pinCodeLocalValue= JSON.parse(localStorage.getItem("pinCodeValueStore"))
    if(pinCodeLocalValue){
      setPinCode(pinCodeLocalValue)
    }
  },[])




  const data={
    location,
    pinCode,
    setLocation,
    setPinCode
  }

  // const practice= await getPractice()
  // console.log("pipeline data................",practice);

  return (
   <main>
     {/* <div className=' p-6 z-[200] border-2 border-black h-max bg-white w-max'>
        <h1>Studying outside your Home-Town?</h1>
        <label htmlFor="location">Location</label>
        <input type="text" className='outline-none border border-slate-600 p-3 rounded-lg' />
        <button className=' bg-red-500 px-6 py-2 rounded-xl'>Search</button>

      
    </div> */}

  <MscreenSearchBar data={data} />



   <MobileSearchBar data={data}/>


   </main>
  )
}
