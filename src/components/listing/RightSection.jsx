import React from 'react'
import DescriptionSection from './DescriptionSection'

import TextBox from './TextBox'
import CountSection from './CountSection'

export default function RightSection({register,setValue}) {
  return (
    <div className=' w-[50%] h-full border-r border-slate-400'>
      <main  className='  h-full w-[80%] flex flex-col'>
        <TextBox register={register} objectId="location" label="Propertiy  Location"/>
        <TextBox register={register} objectId="locationName" label="Propertiy  Name"/>
        <TextBox register={register} objectId="price" label="Set price per month"/>
        <section className=' flex gap-2 w-full justify-between '>
        <CountSection id="roomCount" label="Room Count"  setFormValue={
          setValue
        }/>
        <CountSection id="bathroomCount" label="Bathroom Count"  setFormValue={
          setValue
        }/>
        </section>
        <DescriptionSection register={register} objectId="description"/>
     

      </main>
      
    </div>
  )
}
