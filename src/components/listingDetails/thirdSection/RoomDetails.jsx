import React from 'react'
import Text from './Text'

export default function RoomDetails({listingData}) {
  return (
    <section className='  h-max py-6   w-full md:w-[60%]'>      
<main className='  w-full md:w-[70%]   h-max flex flex-col  ' >
  {/* text section */}
 <div className=' w-full h-max '>
 <p className=' text-2xl text-neutral-600 font-semibold'> 
    Room Details:
  </p>
 </div>
 {/* details section */}
 <section className=' flex  mt-4 flex-col gap-1 font-light w-full h-max'>
  <Text name="Type" value={listingData?.type}/>
  <Text name="Payment Interval" value={listingData?.interval}/>
  <Text name="Water Supply" value={listingData?.waterSupply}/>
  <Text name="Electricity" value={listingData?.electricity}/>
  <Text name="Bathroom Type" value={listingData?.bathroomType}/>
  <Text name="Nearest Bus Stop" value={listingData?.nearBus}/>
  <Text name="Nearest train station" value={listingData?.nearTrain}/>
  <Text name="Nearest Airport" value={listingData?.nearAirport}/>

  



 </section>


</main>      
    </section>
  )
}
