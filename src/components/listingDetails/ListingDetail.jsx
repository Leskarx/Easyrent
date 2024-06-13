import React from 'react'
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './thirdSection/ThirdSection';


export default function ListingDetail({listingData,ownerData,currentUser}) {
  console.log("listing detain page",listingData);
  return (
    <div className=' absolute w-full h-full'>
     <div className=' relative flex flex-col items-center w-full h-full '>
      <div className=' w-full    mt-20 bg-white pt-10 px-6 md:px-0 md:pl-48 md:pr-48  '>
        <div className=' flex flex-col gap-3  w-full h-full'>

          <div className='flex justify-between items-center w-full '>
            <h1 className=' text-2xl md:text-4xl font-semibold'>{listingData?.locationName}</h1>
            <div className=' flex justify-center items-center gap-8'>
              <p className=' underline text-sm'>Share</p>
              <p className=' underline text-sm'>Save</p>
            </div>
           
          </div>


       <FirstSection listingData={listingData} />

       <SecondSection listingData={listingData} ownerData={ownerData}  />
       <ThirdSection listingData={listingData} ownerData={ownerData} currentUser={currentUser} />

        </div>
      </div>

     </div>
    </div>
  )
}
