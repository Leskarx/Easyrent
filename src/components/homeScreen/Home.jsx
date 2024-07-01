"use client";
import React from 'react'
import SearchBar from './SearchBar'
import DiscoverPrime from './DiscoverPrime'
import { useEffect } from 'react'
import Navbar from '../utils/navbar/Navbar'
import MobileScreenNavbar from '../utils/navbar/MobileScreenNavbar'
import ExploreRooms from './ExploreRooms';
import HomePageCard from '../utils/card/HomePageCard'; 
import Footer from '../mainBackground/Footer';

export default  function HomeScreen({user,listing}) {
  useEffect(()=>{
    localStorage.clear()
  },[])

  return (
    <div className={`        w-full  `}>

     <MobileScreenNavbar user={user}/>

     
<section className=' relative flex flex-col w-full h-max '>
<Navbar user={user} homePage={true} />
   <SearchBar home={true}/>
   </section>

<section className='flex absolute top-16 sm:top-24 md:top-72 flex-col gap-4 w-full h-max px-6  pb-24 pt-16 md:px-12 md:pt-20 md:pb-40  bg-white' >
  {/* explore rent pg section */}
  <ExploreRooms/>

  
  
{/* text section */}


<div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-8  w-full '>




{/* listing */}
 

</div>

<section className=' mt-12'><DiscoverPrime/></section>
<section className=' mt-12 w-full flex flex-col gap-2'>
<h4 className=' lg:font-bold font-semibold text-xl lg:text-2xl text-slate-800'>
        Discover your next Home
      </h4>
      <p className=' font-light text-sm'>
        Explore the best PG and rent houses in your city
</p>
<div className=' w-full overflow-x-auto'>
<div className=' py-2 grid grid-cols-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6  md:gap-3 gap-1 md:w-full w-max  '>

{
listing?.map((items)=>{
  return(
    <HomePageCard key={items.id} type={items.type} id={items.id} price={items.price} rating={items.rating} location={items.location} title={items.locationName} src={items.mainImageSrc}  />
  )
})

  }

</div>
</div>

</section>





<Footer/>
  </section>  


    </div>
  )
}
