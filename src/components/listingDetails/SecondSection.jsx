import React from 'react'
import MultipleImageSection from './MultipleImageSection'
import PriceSection from './PriceSection'

export default function SecondSection({listingData,ownerData}) {
  return (
    <div className=" w-full h-max   ">

<section className=' mt-5 md:mt-0 w-full h-[380px] md:h-24 flex md:flex-row justify-center items-center flex-col gap-5'>
<MultipleImageSection listingData={listingData}/>

<PriceSection listingData={listingData}/>
</section>
    </div>
  )
}
