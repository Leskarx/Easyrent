"use client";
import React from 'react'
import MscreenText from '../utils/text/MscreenText'
import Button from '../utils/Button/Button'
import { useEffect,useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingScreen from '../loadingScreen/LoadingScreen';
import axios from 'axios';
import { usePathname } from 'next/navigation';




export default function MscreenSearchBar({data,setToggle}) {
  const pathname = usePathname()
  const [buttonLoading, setButtonLoading] = useState(false)
  const [loadingScreen, setLoadingScreen] = useState(false)
  const router=useRouter()

  const {location,pinCode,setLocation,setPinCode}=data
  async function handleSubmit(){

    localStorage.setItem("locationValueStore",JSON.stringify(location))
    localStorage.setItem("pinCodeValueStore",JSON.stringify(pinCode))
    if(location!="" || pinCode!=""){
      setLoadingScreen(true)
    
  
      setButtonLoading(true)
const res=await axios.post("/api/search",{location,pinCode})
console.log("response from search",res.data)
localStorage.setItem("searchData",JSON.stringify(res.data))
router.push('/search')


 if(pathname=="/search"){
  setButtonLoading(false)
  setLoadingScreen(false)
 }
  setToggle((prev)=>(!prev ))





      
      
    }
   

    
  }

    useEffect(()=>{
    if(!localStorage.getItem("locationValueStore")){
      localStorage.setItem("locationValueStore",JSON.stringify(location))
      
    }
    if(!localStorage.getItem("pinCodeValueStore")){
      localStorage.setItem("pinCodeValueStore",JSON.stringify(pinCode))
    }
      
  
    },[location,pinCode])
    
   

 


  // const handleSubmit=()=>{
    
  //   // console.log("data from search bar from store",locationValueStore);

    

  //   console.log("data from search bar",location,pinCode);
  // }
  return (
  <>
    <main className=' absolute hidden md:block top-24 left-1/2 rounded-xl shadow-black/50  shadow-2xl -translate-x-1/2 bg-white p-4  w-[50%]'>
       <div className=' w-full h-full flex flex-col gap-2'>
      {/* text section */}
      <main className=' w-full h-max'>
      <p className=' font-semibold text-xl'>
        Studying outside your Home-Town?
        </p>
        <p className=' font-light text-sm'>
        Search your perfect home in seconds
        </p>
      </main>
       
       <section className=' w-full h-full flex flex-row items-center gap-14'>
<MscreenText title='Pincode' placeholder='Code' type='number' value={pinCode} setValue={setPinCode} />
<MscreenText title='Location' placeholder='Where?' type='text' value={location} setValue={setLocation} />
<div className=' w-[40%] h-full pt-3 flex justify-center items-center'>
<Button buttonTitle={"Search"} handleSubmit={handleSubmit} isLoading={buttonLoading} />
</div>


        </section>
       </div>
      
    </main>
    {
      loadingScreen && <LoadingScreen/>
    }
  </>
  )
}
