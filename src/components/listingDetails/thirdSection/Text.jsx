import React from 'react'

export default function Text({name,value="N/A"}) {
  return (
    <div className=' w-full flex justify-between '>
     <p>{name} :</p>
     <p>{value}</p>
    </div>
  )
}
