"use client"
import LeftSection from '@/components/listing/LeftSection'
import RightSection from '@/components/listing/RightSection'
import React from 'react'
import { set, useForm } from "react-hook-form"
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'
import Button from '../utils/Button/Button'
import Navbar from '../utils/navbar/Navbar'
import MobileScreenNavbar from '../utils/navbar/MobileScreenNavbar'
import { TiArrowLeftThick } from "react-icons/ti";
import LoadingScreen from '../loadingScreen/LoadingScreen'
import Footer from '../mainBackground/Footer'



export default function Listing({user}) {
  const [loadingScreen,setLoadingScreen]=React.useState(false)
  const router=useRouter()

  const {
    reset,
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } =useForm({
    location:"",
    locationName:"",
    type:"",
    paymentInterval:"",
  waterSupply:"",
  electricitySupply:"",
  bathroomType:"",
  genderType:"",
  pinCode:"",
  state:"",
  tagLine:"",
    price:"",
    description:"",
    mainImageSrc:"",
    imagesSrc:[""],
    roomCount:0,
    bathroomCount:0,
})



const [loading,setLoading]=React.useState(false)
function customSetValue(id,value){
  setValue(id,value)

}
function customGetValues(id){
  return getValues(id)}
 

 async function onSubmit(data){
  console.log("data in listing page.... ->>>>>",data)
 


  
  setLoading(true)
  if(
    data.mainImageSrc==null
  ){
    setLoading(false)
    return toast.error("Please add main image")
  }
  const response=await axios.post('/api/owner/listing',data)
  
  if(response.data.success){
    toast.success(" successfully added ")
    router.push('/manageproperties')
    

  }else{
    setLoading(false)
    

     toast.error("unable to add ")

  }


  }



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

    {/* main section */}
    <section className='flex  absolute top-4 sm:top-4 md:top-24 flex-col gap-4 w-full h-max min-h-screen px-6  pb-24 pt-1 md:px-10 md:pt-6 md:pb-40  overflow-x-hidden  bg-white' >
 
 
    <div onClick={()=>{
    setLoadingScreen(true)

    router.back()
  }} className=' block md:hidden'>
  <TiArrowLeftThick size={20}/>
  </div>

    <main className='   h-[85%] w-full flex md:flex-row flex-col gap-10 md:gap-0 '>
    <RightSection register={register} setValue={customSetValue}/>
    <LeftSection register={register} setValue={customSetValue} getValues={customGetValues} />
      
  </main>
      <section className=' py-6 w-full h-[25%]   flex justify-center items-end '>
      
    <section className=' w-full md:w-[16%]'>
    <Button isLoading={loading} handleSubmit={handleSubmit(onSubmit)} buttonTitle="Add Now"/>
    </section>
         
      </section>

 


<Footer mobileHide/>
</section>









 
     
    
     </div>
    </>
    
  )
}










