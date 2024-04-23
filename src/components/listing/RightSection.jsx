import React from 'react'
import DescriptionSection from './DescriptionSection'
import TextBox from './TextBox'

export default function RightSection({register}) {
  return (
    <div className=' w-[50%] h-full border-r border-slate-400'>
      <main  className='  h-full w-[80%] flex flex-col'>
        <TextBox register={register} objectId="location" label="Propertiy  Location"/>
        <TextBox register={register} objectId="locationName" label="Propertiy  Name"/>
        <TextBox register={register} objectId="price" label="Set price per month"/>
        <DescriptionSection register={register} objectId="description"/>

      </main>
      
    </div>
  )
}
