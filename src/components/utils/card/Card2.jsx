"use client";
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import LoadingScreen from '@/components/loadingScreen/LoadingScreen';
import Button from '../Button/Button';
import CancelLargeSection from '@/components/Booking/CancelLargeSection';

export default function Card2({title, src, price, location, rating, id, date, status, reservationId}) {
  const [isLoading, setIsLoading] = useState(false)
  const [toggle, setToggle] = useState(false)
  
  // Convert status to human-readable form
  const statusMapping = {
    pending: "Request sent",
    confirmed: "Booking confirmed",
    cancelled: "Booking rejected"
  };
  status = statusMapping[status] || status;

  // Deserialize the date
  const day = new Date(date).toDateString();
  
  const router = useRouter();

  return (
    <>
      <section className='col-span-1 group border-2 rounded-xl shadow-lg shadow-black/15'>
        <div className="flex flex-col justify-center items-center gap-2 w-full h-max">
          <div onClick={() => {
            setIsLoading(true);
            router.push(`/listing/${id}`);
          }} className='relative cursor-pointer rounded-t-xl w-full h-[260px] bg-slate-200 overflow-hidden'>
            <Image
              className='object-cover w-full h-full rounded-t-xl group-hover:scale-110 transition duration-300 ease-in-out'
              src={src || "/Frame 5.png"}
              alt='Image'
              fill
              quality={100}
              priority
            />
          </div>
          <div className="flex flex-col p-2 relative w-full">
            <p className='flex items-center font-semibold text-lg'>{location} (<span className='text-sm text-center'>{title}</span>)</p>
            <p className='font-semibold flex justify-between text-slate-800 text-sm lg:text-base'>Booked on: <span>{day}</span></p>
            <p><span className='text-base font-medium'>₹ {price}</span> <span className='font-light text-sm'>monthly</span></p>
            <main className='w-full py-2 flex items-center justify-between gap-2'>
              <div onClick={() => setToggle(!toggle)} className='cursor-pointer'>
                <p className='font-light pl-4'>Cancel</p>
              </div>
              <div className='w-[70%]'>
                <Button buttonTitle={status} />
              </div>
            </main>
          </div>
        </div>
      </section>
      {isLoading && <LoadingScreen />}
      {toggle && <CancelLargeSection setToggle={setToggle} route='/api/deletebooking' id={reservationId} />}
    </>
  )
}
