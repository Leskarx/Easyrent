import React from 'react'
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';


export default function ListingDetail({listingData,ownerData,currentUser}) {
  console.log("listing detain page",listingData);
  return (
    <div className=' absolute w-full h-full'>
     <div className=' relative flex flex-col items-center w-full h-full '>
      <div className=' w-full min-h-full max-h-max mt-20 bg-white pt-10 pl-48 pr-48  '>
        <div className=' flex flex-col gap-3 bg-green-500  w-full h-full'>

          <div className='flex justify-between items-center w-full '>
            <h1 className=' text-4xl font-semibold'>{listingData?.locationName}</h1>
            <div className=' flex gap-8'>
              <p className=' underline'>Share</p>
              <p className=' underline'>Save</p>
            </div>
           
          </div>


        <FirstSection listingData={listingData} />

        <SecondSection listingData={listingData} ownerData={ownerData}  />

        </div>
      </div>

     </div>
    </div>
  )
}
