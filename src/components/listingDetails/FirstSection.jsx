import DetailsSection from './DetailsSection'
import MainImageSectionListing from './MainImageSectionListing'
import React from 'react'


export default function FirstSection({listingData}) {
  return (
    <section className=' flex  cs:flex-col lg:flex-row flex-col w-full h-max lg:h-[380px]  gap-8 '>

<MainImageSectionListing listingData={listingData} />
<DetailsSection listingData={listingData} />
         </section>
  )
}
