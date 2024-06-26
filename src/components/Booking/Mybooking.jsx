"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/utils/navbar/Navbar';
import { TiArrowLeftThick } from "react-icons/ti";
import MobileScreenNavbar from '@/components/utils/navbar/MobileScreenNavbar';
import EmptyPage from '../utils/emptyPage/EmptyPage';
import Card2 from '../utils/card/Card2';
import { useRouter } from 'next/navigation';
import Footer from '../mainBackground/Footer';
import LoadingScreen from '../loadingScreen/LoadingScreen';

export default function MyBooking({ booking, user }) {
  const router = useRouter();
  const [loadingScreen, setLoadingScreen] = useState(false);

  useEffect(() => {
    router.refresh();
  }, []);

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

      {(!booking || booking.length === 0) ? (
        <EmptyPage otherPage={true} />
      ) : (
        <section className='flex absolute top-4 sm:top-4 md:top-24 flex-col gap-4 w-full h-max min-h-screen px-6 pb-24 pt-16 md:px-10 md:pt-20 md:pb-40  overflow-x-hidden bg-white'>


          <section className='w-full h-max flex flex-col gap-1'>
            <h1 className='font-bold text-lg md:text-2xl text-slate-800'>Manage your booking</h1>
            <p className='font-light text-sm'>See status of your booking</p>
          </section>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full'>
            {booking.map((items) => (
              <Card2
                key={items.id}
                date={new Date(items.startDate).toISOString()} // Pass date as a string
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
