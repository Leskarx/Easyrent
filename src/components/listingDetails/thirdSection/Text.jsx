import React from 'react'

export default function Text({name,value="N/A"}) {
  return (
    <div className='w-full flex justify-between gap-2 text-nowrap  '>
     <p>{name} :</p>
     <p className='[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-x-scroll'>{value}</p>
    </div>
  )
}
