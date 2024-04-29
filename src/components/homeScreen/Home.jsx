import React from 'react'
import SearchBar from './SearchBar'
import getListing from '@/actions/getListing/getListing'
import Card from '../utils/card/Card'
import DiscoverPrime from './DiscoverPrime'

export default async function HomeScreen() {
  const listing=await getListing()
  console.log("hehehh",listing)
  return (
    <div className=' hidden md:block    p-2  w-screen mt-20 '>

     
<section className=' flex w-full h-[30vh]  justify-center '>
   <SearchBar/>
   </section>
<section className='flex flex-col gap-16 w-screen h-max p-12  bg-white' >
  
<div className=' flex flex-wrap justify-between   gap-8  w-full '>

{
listing.map((items)=>{
  return(
    <Card key={items.id} title={items.locationName} src={items.mainImageSrc}  />
  )
})

  }

</div>

<DiscoverPrime/>






  </section>  


    </div>
  )
}
