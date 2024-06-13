import React from 'react'
import SmallImages from './SmallImages'

export default function MultipleImageSection({listingData}) {
  return (
    <main className=' cursor-pointer grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 md:gap-6 gap-3  w-full md:w-[60%] h-full  '>

{
    listingData?.imagesSrc.map((src,index)=>{
        return <SmallImages key={index} src={src} />

    })
}
      
    </main>
  )
}
