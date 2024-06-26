"use client";
import React from 'react'
import Button from '../Button/Button'
import CancelLargeSection from '@/components/Booking/CancelLargeSection';
import { useState } from 'react';

export default function UpdateCard({id,status,name="N/A",propertyName,location,phone="N/A",date}) {
  const [toggleRejected,setToggleRejected]=useState(false)
  const [toggleConfirm,setToggleConfirm]=useState(false)


  function StatusSection(){
    return (
      <main className=' w-full flex justify-center  py-4'>
      <div className='w-[80%] flex gap-2'>
      
        <Button buttonTitle="Reject" handleSubmit={handleReject} color="bg-red" />
        <Button buttonTitle="Accept" handleSubmit={handleConfirm} color="bg-green" />
      </div>
        
  
      </main>
  
    )
  }
  

  function handleConfirm(){
    setToggleConfirm(true)

  }
  function handleReject(){
    setToggleRejected(true)
  }

const day = new Date(date).toDateString();

  return (
   <>
   {
     <>
      {
        toggleRejected && (
          <CancelLargeSection setToggle={setToggleRejected} id={id} route="/api/manageproperty/cancel" toastMessage="Booking cancelled successfully" text='Do you want to cancel this booking?' smallText='Action cannot be undo'/>
        )
      }
      {
        toggleConfirm && (
          <CancelLargeSection setToggle={setToggleConfirm} id={id} route="/api/manageproperty/confirm" toastMessage="Booking confirmed successfully" text='Do you want to confirm this booking?' smallText='action cannot be undo'/>
        )
      }

     </>

     


     
      
      
      
   }
    <div className='  border-2 rounded-lg py-6 px-2 shadow-md shadow-black/15   w-full'>
     <main className=' flex flex-col gap-1' >
     <UpdateCardText keyy={"Property name"} value={propertyName}/>
      
      <UpdateCardText keyy={"Location"} value={location}/>
      <UpdateCardText keyy={"Booked name"} value={name}/>
      <UpdateCardText keyy={"Booked on"} value={day} />
      <UpdateCardText keyy={"Phone number"} value={phone?.toString()}/>
      <TextStatus keyy={"Status"} value={status}/>
     {
        status=="pending"?
        <StatusSection/>
        :
        null
     }  

     </main>
    </div>
   </>
  )
}



function UpdateCardText({keyy,value}) {
  return(
    <p className='  flex items-center gap-2 overflow-auto'>
    <span className=" font-semibold ">{keyy} :</span><span className=' tracking-wider text-slate-900 '>
    {value||"N/A"}
    </span>
  </p>
  )
}



function TextStatus({keyy,value}) {
  let color
  if(value=="pending"){
    color="text-blue-500"
  }else if(value=="confirmed"){
    color="text-green-500"
  }else if(value=="cancelled"){
    color="text-red-500"
  }

  return(
    <p className='  flex items-center gap-2 overflow-auto'>
    <span className=" font-semibold ">{keyy} :</span><span className={`${color} tracking-wider font-bold `}>
    {value||"N/A"}
    </span>
  </p>
  )
}

