"use client"
import React, { useEffect, useRef, useState } from 'react';
import SearchBar from './SearchBar';
import DiscoverPrime from './DiscoverPrime';
import Navbar from '../utils/navbar/Navbar';
import MobileScreenNavbar from '../utils/navbar/MobileScreenNavbar';
import ExploreRooms from './ExploreRooms';
import HomePageCard from '../utils/card/HomePageCard'; 
import Footer from '../mainBackground/Footer';
import HomeLoadingScreen from '../loadingScreen/HomeLoadingScreen'; 
export default function HomeScreen({ user, listing }) {
  const [loading, setLoading] = useState(true);  // State to manage loading status

  useEffect(() => {
    localStorage.clear();
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);  // Set loading to false after components are loaded
    }, 2800);  // Adjust the delay as needed
  }, []);

  if (loading) {
    return <HomeLoadingScreen />;  // Display the loading screen if loading is true
  }

  return (
    <div className={`w-full`}>
      <MobileScreenNavbar user={user} />
      <section className='relative flex flex-col w-full h-max '>
        <Navbar user={user} homePage={true} />
        <SearchBar home={true} />
      </section>
      <section className='flex absolute top-16 sm:top-24 md:top-72 flex-col gap-4 w-full h-max px-6 pb-24 pt-16 md:px-12 md:pt-20 md:pb-40 bg-white'>
        <ExploreRooms />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full'>
          {/* listing */}
        </div>
        <section className='mt-12'><DiscoverPrime /></section>
        <section className='mt-12 w-full flex flex-col gap-2'>
          <h4 className='lg:font-bold font-semibold text-xl lg:text-2xl text-slate-800'>
            Discover your next Home
          </h4>
          <p className='font-light text-sm'>
            Explore the best PG and rent houses in your city
          </p>
          <div className='w-full overflow-x-auto'>
            <div className='py-2 grid grid-cols-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 md:gap-3 gap-1 md:w-full w-max'>
              {listing?.map((items) => (
                <HomePageCard key={items.id} type={items.type} id={items.id} price={items.price} rating={items.rating} location={items.location} title={items.locationName} src={items.mainImageSrc} />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </div>
  );
}
