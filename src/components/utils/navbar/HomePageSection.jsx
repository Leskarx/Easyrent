'use client';
import React from 'react'
import ProfileSectionNavbar from './ProfileSectionNavbar'
import { FaHome } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import LoadingScreen from '@/components/loadingScreen/LoadingScreen';

export default function HomePageSection({user}) {
  const [loading,setLoading]=useState(false)
  const router=useRouter()
  return (
<>{
  loading && <LoadingScreen />

}

<main className='  w-max h-full flex justify-center items-center gap-10'>


<div onClick={()=>{
  setLoading(true)
 router.push('/addproperty')
}} className=' flex justify-center items-center gap-4 py-2 px-2 active:scale-105 rounded-full cursor-pointer hover:bg-slate-400 hover:bg-opacity-45 transition '>
<p className=' font-semibold cursor-pointer w-max  ' >Add your properties</p>
<FaHome size={18} />
</div>

 <ProfileSectionNavbar user={user}/>

 </main>
</>
  )
}
