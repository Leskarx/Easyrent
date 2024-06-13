import DetailsSection from './DetailsSection'
import MainImageSectionListing from './MainImageSectionListing'
import React from 'react'


export default function FirstSection({listingData}) {
  return (
    <section className=' flex   md:flex-row flex-col w-full h-max md:h-[380px]  gap-8 '>

<MainImageSectionListing listingData={listingData} />
<DetailsSection listingData={listingData} />
         </section>
  )
}
