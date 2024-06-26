"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/utils/navbar/Navbar';
import SearchBar from '../homeScreen/SearchBar';
import MobileScreenNavbar from '@/components/utils/navbar/MobileScreenNavbar';
import EmptyPage from '../utils/emptyPage/EmptyPage';
import Card2 from '../utils/card/Card2';
import { useRouter } from 'next/navigation';

export default function MyBooking({ booking, user }) {
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

      {(!booking || booking.length === 0) ? (
        <EmptyPage otherPage={true} />
      ) : (
        <section className='flex absolute top-16 sm:top-24 md:top-24 flex-col gap-4 w-full h-max min-h-screen px-6 pb-16 pt-16 md:px-10 md:py-20 overflow-x-hidden bg-white'>
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
        </section>
      )}
    </div>
  );
}
