import React from 'react'
import DescriptionSection from './DescriptionSection'

import TextBox from './TextBox'
import CountSection from './CountSection'
// import { SelectTag } from './LeftSection'

export default function RightSection({register,setValue,defaultValue}) {
console.log("defaultValues.........>",defaultValue)


  return (
    <div className=' w-full md:w-[50%] h-full '>
      <main  className='  h-full w-full md:w-[80%] flex flex-col'>
        <TextBox defaultValue={defaultValue?.location} register={register} objectId="location" label="Property  Location" placeholder={"Enter the location"}/>
        <TextBox defaultValue={defaultValue?.locationName} placeholder={"Your Property name"} register={register} objectId="locationName" label="Property  Name"/>
        <TextBox defaultValue={defaultValue?.pinCode}  placeholder={"Enter Pin Code"} register={register} type='number' objectId="pinCode" label="Pin Code"/>
        <TextBox defaultValue={defaultValue?.state} placeholder={"Enter your state"} register={register} type='text' objectId="state" label="State"/>
        <TextBox defaultValue={defaultValue?.price} placeholder={"Enter Your Property Price"} register={register} type='number' objectId="price" label="Set Price Per Interval"/>
        <TextBox defaultValue={defaultValue?.tagLine} placeholder={"Give a Appropriate Tagline "} register={register} objectId="tagLine" label="Set a Tagline"/>
        <section className=' flex gap-2 w-full justify-between '>
        <CountSection defaultValue={defaultValue} id="roomCount" label="Room Count"  setFormValue={
          setValue
        }/>
        <CountSection defaultValue={defaultValue} id="bathroomCount" label="Bathroom Count"  setFormValue={
          setValue
        }/>
        </section>
        <DescriptionSection defaultValue={defaultValue?.description} register={register} objectId="description"/>
       
     

      </main>
      
    </div>
  )
}
