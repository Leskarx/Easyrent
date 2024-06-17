import React from 'react'
import MscreenText from '../utils/text/MscreenText'
import Button from '../utils/Button/Button'

export default function MscreenSearchBar({data}) {
  const {location,pinCode,setLocation,setPinCode}=data
  const handleSubmit=()=>{
    console.log("data from search bar",location,pinCode);
  }
  return (
    <main className=' absolute hidden md:block top-24 left-1/2 rounded-xl shadow-black/50 drop-shadow-2xl shadow-2xl -translate-x-1/2 bg-white p-4  w-max'>
       <div className=' w-full h-full flex flex-col gap-2'>
      {/* text section */}
      <main className=' w-full h-max'>
      <p className=' font-semibold text-xl'>
        Studying outside your Home-Town?
        </p>
        <p className=' font-light text-sm'>
        Search your perfect home in seconds
        </p>
      </main>
       
       <section className=' w-full h-full flex flex-row items-center gap-14'>
<MscreenText title='Pincode' placeholder='Code' type='number' value={pinCode} setValue={setPinCode} />
<MscreenText title='Location' placeholder='Where?' type='text' value={location} setValue={setLocation} />
<div className=' w-[30%] h-full flex justify-center items-center'>
<Button buttonTitle={"Search"} handleSubmit={handleSubmit} />
</div>


        </section>
       </div>
      
    </main>
  )
}
