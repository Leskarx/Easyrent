import React from 'react'
import ExploreRoomsText from './ExploreRoomsText'

export default function ExploreRooms() {
  return (
    <main className=' w-full py-2 h-max flex-col flex gap-2'>
      <div className=' w-full h-max'>
      <h4 className=' lg:font-bold font-semibold text-xl lg:text-2xl text-slate-800'>
        Explore Rooms
      </h4>
      </div>
{/* multiple section */}
<section className=' w-full py-2 h-max lg:flex-row flex  items-center 
justify-center lg:gap-0 gap-2
lg:justify-between '>
<div className=" lg:w-[30%] w-[50%] ">
    <ExploreRoomsText title={"PG rooms"} src={"/pgroom.png"}/>
    </div>
    <div className=" lg:w-[30%] w-[50%]  ">
    <ExploreRoomsText  title={"Rent houses"} src={"/rentRoom.png"}/>
    </div>
    <div className="hidden lg:block w-[30%] ">
    <ExploreRoomsText  title={"(coming soon)"} src={"/commigSoon.png"}/>
    </div>

</section>

    </main>
  )
}
