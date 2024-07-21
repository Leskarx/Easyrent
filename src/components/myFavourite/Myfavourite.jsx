"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/utils/navbar/Navbar';
import { TiArrowLeftThick } from "react-icons/ti";
import MobileScreenNavbar from '@/components/utils/navbar/MobileScreenNavbar';
import EmptyPage from '../utils/emptyPage/EmptyPage';
import MyFavCard from '../utils/card/MyFavCard';
import { useRouter } from 'next/navigation';
import Footer from '../mainBackground/Footer';
import LoadingScreen from '../loadingScreen/LoadingScreen';

export default function MyBooking({  user,favData }) {
  const router = useRouter();
  const [loadingScreen, setLoadingScreen] = useState(false);
  // console.log("user data.......>",favData);
  useEffect(()=>{
router.refresh()
  },[])



  return (
   <>
   {
      loadingScreen && <LoadingScreen/>
   }
   
   <div className='w-full'>
     <MobileScreenNavbar user={user} hidebanner/>
      <section className='relative flex flex-col w-full h-max'>
        <Navbar user={user} homePage={true} />
       
      </section>
      <div onClick={()=>{
    setLoadingScreen(true)

    router.back()
  }} className=' absolute top-8 z-[999] left-6 block md:hidden'>
  <TiArrowLeftThick size={20}/>
  </div>

      {(!favData || favData.length === 0) ? (
        <EmptyPage otherPage={true} />
      ) : (
        <section className='flex absolute top-4 sm:top-4 md:top-24 flex-col gap-4 w-full h-max min-h-screen px-6 pb-24 pt-16 md:px-10 md:pt-20 md:pb-40  overflow-x-hidden bg-white'>


          <section className='w-full h-max flex flex-col gap-1'>
            <h1 className='font-bold text-lg md:text-2xl text-slate-800'>Manage your Favorite</h1>
            <p className='font-light text-sm'>View or Remove your Favourite</p>
          </section>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full'>
            {favData.map((items) => (
              <MyFavCard
                key={items.id}
                userId={user.id}
               
                status={items.status}
                id={items.id}
                price={items.price}
                rating={items.rating}
                location={items.location}
                title={items.locationName}
                src={items.mainImageSrc}
                reservationId={items.reservationId}
              />
            ))}
          </div>
          <Footer/>
        </section>
      )}

    </div>
   </>
  );
}
