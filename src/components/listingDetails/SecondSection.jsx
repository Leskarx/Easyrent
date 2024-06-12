import React from 'react'
import MultipleImageSection from './MultipleImageSection'
import PriceSection from './PriceSection'

export default function SecondSection({listingData,ownerData}) {
  return (
    <div className=" w-full h-max   ">

<section className=' w-full h-40 flex gap-5'>
<MultipleImageSection listingData={listingData}/>

<PriceSection listingData={listingData}/>
</section>
    </div>
  )
}
