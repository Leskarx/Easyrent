 import React from 'react'
import RoomDetails from './RoomDetails'
import OwnerDetails from './OwnerDetails'
 
 export default function ThirdSection({listingData,ownerData}) {
   return (
     <section className=' mt-6 md:mt-0 flex flex-col w-full h-max md:flex-row gap-8 '>
        <RoomDetails listingData={listingData}/>
        <OwnerDetails ownerData={ownerData} />
        


       
     </section>
   )
 }
 