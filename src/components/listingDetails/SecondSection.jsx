import React from 'react'
import MultipleImageSection from './MultipleImageSection'
import PriceSection from './PriceSection'

export default function SecondSection({listingData,currentUser}) {
  return (
    <div className=" w-full h-max   ">

<section className={`${(!listingData||listingData?.imagesSrc.length==0  )?"h-max ":"h-[380px] lg:h-24 "}   mt-5 md:mt-0 w-full  flex lg:flex-row justify-center items-center flex-col gap-5`}>
<MultipleImageSection listingData={listingData}/>

<PriceSection listingData={listingData} currentUser={currentUser}/>
</section>
    </div>
  )
}
