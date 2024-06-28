import React from 'react'
import DescriptionSection from './DescriptionSection'

import TextBox from './TextBox'
import CountSection from './CountSection'
import { SelectTag } from './LeftSection'

export default function RightSection({register,setValue}) {


  return (
    <div className=' w-full md:w-[50%] h-full md:border-r border-0 border-slate-400'>
      <main  className='  h-full w-full md:w-[80%] flex flex-col'>
        <TextBox register={register} objectId="location" label="Property  Location" placeholder={"Enter the location"}/>
        <TextBox placeholder={"Your Property Location"} register={register} objectId="locationName" label="Property  Name"/>
        <TextBox placeholder={"Enter Pin Code"} register={register} type='number' objectId="pinCode" label="Pin Code"/>
        <TextBox placeholder={"Enter Your Property Price"} register={register} type='number' objectId="price" label="Set Price Per Interval"/>
        <TextBox placeholder={"Give a Appropriate Tagline "} register={register} objectId="tagLine" label="Set a Tagline"/>
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
