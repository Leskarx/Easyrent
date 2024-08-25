import React from 'react'
import SmallImages from './SmallImages'

export default function MultipleImageSection({listingData}) {
  return (
    <main className={` ${(!listingData||listingData?.imagesSrc.length==0  )?"hidden lg:block":"block"}   grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 lg:gap-6 gap-3  w-full lg:w-[60%] h-full  `}>

{
    listingData?.imagesSrc.map((src,index,array)=>{
        return <SmallImages index={index} array={array} key={index} src={src} />

    })
}
      
    </main>
  )
}
