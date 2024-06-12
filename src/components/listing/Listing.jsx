"use client"
import LeftSection from '@/components/listing/LeftSection'
import RightSection from '@/components/listing/RightSection'
import React from 'react'
import { set, useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
import Button from '../utils/Button/Button'



export default function Listing() {
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
  setLoading(true)
  const response=await axios.post('/api/owner/listing',data)
  if(response.data.success){
    toast.success(" successfully added ")
    reset()

  }else{
    setLoading(false)

     toast.error("unable to add ")

  }
console.log("listing ->>>>>",response.data.success);

  }



  return (
    <div className=' flex justify-center md:mt-24 mt-0 h-screen'>
     <section className=' p-4 md:w-[70%] md:h-[80%] w-full h-full bg-white flex flex-col gap-10'>
  <main className='   h-[85%] w-full flex md:flex-row flex-col gap-10 md:gap-0 '>
    <RightSection register={register} setValue={customSetValue}/>
    <LeftSection register={register} setValue={customSetValue} getValues={customGetValues} />
      
  </main>
      <section className=' py-6 w-full h-[25%]   flex justify-center items-end '>
      
    <section className=' w-[16%]'>
    <Button isLoading={loading} handleSubmit={handleSubmit(onSubmit)} buttonTitle="Add Now"/>
    </section>
         
      </section>


     </section>
    </div>
  )
}
