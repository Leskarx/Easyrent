import React from 'react'

export default function UpdateCard({id,status,name,propertyName,location,phone,date}) {
  return (
    <div className='  border-2 rounded-lg py-6 shadow-md shadow-black/15   w-full'>
      {status}
      {name}
      {propertyName}
      {location}
    </div>
  )
}
