import React from 'react'
import SmallImages from './SmallImages'

export default function MultipleImageSection({listingData}) {
  return (
    <main className=' cursor-pointer grid grid-cols-4 grid-rows-1 gap-6 items-center w-[60%] h-full '>

{
    listingData?.imagesSrc.map((src,index)=>{
        return <SmallImages key={index} src={src} />

    })
}
      
    </main>
  )
}
