import React from 'react'
import Text from './Text'

export default function OwnerDetailsSection({ownerData}) {
  return (
    <main className=' h-max w-full font-light '>
      <Text name="Name" value={ownerData?.name}/>
        <Text name="Gender" value={ownerData?.gender||"N/A"}/>
        <Text name="Age" value={ownerData?.age||"N/A"}/>
        <Text name="Phone" value={ownerData?.phoneNumber||"N/A"}/>
        <Text name="Email" value={ownerData?.email||"N/A"}/>
        
    </main>
  )
}
