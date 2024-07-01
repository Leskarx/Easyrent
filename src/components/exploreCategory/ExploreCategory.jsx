"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/utils/navbar/Navbar';
import SearchBar from '../homeScreen/SearchBar';
import MobileScreenNavbar from '@/components/utils/navbar/MobileScreenNavbar';
import EmptyPage from '../utils/emptyPage/EmptyPage';
import Card from '@/components/utils/card/Card'
import { useRouter } from 'next/navigation';
import Footer from '../mainBackground/Footer';

export default function ExploreCategory({ listing, user,category }) {
    if(category=="pg"){
        category="PG"
    }else if(category=="rent"){
        category="Rent"
    }
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <div className='w-full'>
      <MobileScreenNavbar user={user} />
      <section className='relative flex flex-col w-full h-max'>
        <Navbar user={user} homePage={true} />
        <SearchBar setToggle={setToggle} />
      </section>

      {(!listing || listing.length === 0) ? (
        <EmptyPage otherPage={true} />
      ) : (
        <section className='flex absolute top-16 sm:top-24 md:top-24 flex-col gap-4 w-full h-max min-h-screen px-6 pb-24 pt-16 md:px-10 md:pt-20 md:pb-40  overflow-x-hidden bg-white'>
          <section className='w-full h-max flex flex-col gap-1'>
            <h1 className='font-bold text-lg md:text-2xl text-slate-800'>Explore {category} Houses</h1>
            <p className='font-light text-sm'>{listing.length} result found</p>
          </section>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full'>
          {
listing?.map((items)=>{
  return(
    <Card key={items.id} type={items.type} id={items.id} price={items.price} rating={items.rating} location={items.location} title={items.locationName} src={items.mainImageSrc}  />
  )
})

  }
          </div>
          <Footer/>
        </section>
      )}
    </div>
  );
}
