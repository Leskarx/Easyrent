import React from 'react'
import SearchBar from './SearchBar'
import getListing from '@/actions/getListing/getListing'
import Card from '../utils/card/Card'
import DiscoverPrime from './DiscoverPrime'
import getUser from '@/actions/nextAuthActions/getUser'
import Navbar from '../utils/navbar/Navbar'
import MobileScreenNavbar from '../utils/navbar/MobileScreenNavbar'
import MobileScreenNavWithSearch from '../utils/navbar/MobileScreenNavWithSearch'

export default async function HomeScreen() {
  const user=await getUser()
  const listing=await getListing()
  // console.log("hehehh",listing)
  return (
    <div className={` ${(user!=null)? "block":"hidden md:block" }       w-full  `}>

     <MobileScreenNavbar/>

     
<section className=' relative flex flex-col w-full h-max '>
<Navbar user={user} homePage={true} />
   <SearchBar home={true}/>
   </section>

<section className='flex absolute top-16 sm:top-24 md:top-72 flex-col gap-4 w-screen h-max px-6  pb-10 pt-16 md:px-12 md:py-20  bg-white' >

  
  
{/* text section */}
<section className=' w-full h-max flex flex-col gap-1'>
<h1 className=' font-bold text-2xl text-slate-800' >Discover your next Home</h1>
<p className=' font-light text-sm'>
  Explore the best PG and rent houses in your city
</p>
</section>

<div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-8  w-full '>

{
listing.map((items)=>{
  return(
    <Card key={items.id} id={ items.id} price={items.price} rating={items.rating} location={items.location} title={items.locationName} src={items.mainImageSrc}  />
  )
})

  }

</div>

<section className=' mt-12'><DiscoverPrime/></section>






  </section>  


    </div>
  )
}
