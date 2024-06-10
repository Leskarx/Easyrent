import React from 'react'
import SearchBar from './SearchBar'
import getListing from '@/actions/getListing/getListing'
import Card from '../utils/card/Card'
import DiscoverPrime from './DiscoverPrime'
import getUser from '@/actions/nextAuthActions/getUser'

export default async function HomeScreen() {
  const user=await getUser()
  const listing=await getListing()
  console.log("hehehh",listing)
  return (
    <div className={` ${(user!=null)? "block":"hidden md:block" }       w-screen  `}>

     
<section className=' flex w-full h-[30vh]  justify-center '>
   <SearchBar/>
   </section>
<section className='flex flex-col gap-16 w-screen h-max p-6 md:p-12  bg-white' >
  
<div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-8  w-full '>

{
listing.map((items)=>{
  return(
    <Card key={items.id} id={ items.id} price={items.price} rating={items.rating} location={items.location} title={items.locationName} src={items.mainImageSrc}  />
  )
})

  }

</div>

<DiscoverPrime/>






  </section>  


    </div>
  )
}
