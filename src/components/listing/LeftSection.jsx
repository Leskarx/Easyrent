"use client"
import React from 'react'
import AddphotosListing from './AddphotosListing'
import MainImageUpload from './MainImageUpload'

export const genderOption=[{
  value:"Any"
},
{
value:"Male"
},
{
value:"Female"
}]

export default function LeftSection({setValue,getValues,defaultValue}) {
  const paymentIntervalOption=[{
    value:"Monthly"
  },
  {
    value:"Daily"
  },
  {
    value:"Weekly"
  },
  {
    value:"Quaterly"
  },
  {
    value:"Yearly"
  }
]
 
const propertyOptions=[{
  value:"Rent"
},
{
value:"Pg"
},
{
value:"Other"
}]
const waterSupplyOption=[{
  value:"24/7"
},
{
  value:"Limited"
}]
const bathroomTypeOption=[{
  value:"Private"
},
{
  value:"Shared"

}]
const electricitySupplyOption=[{
  value:"24/7"
},
{
  value:"Main line only"
}]



  return (
    <div className=' gap-6 flex flex-col justify-center items-center w-full md:w-[50%] h-full border-0 md:border-l border-slate-600 '>
      <section className=' w-full flex flex-col gap-4 h-max  pl-2 md:pl-12'>
      <SelectTag selectedValue={defaultValue} option={paymentIntervalOption} setValue={setValue} id="paymentInterval" label="Select payment interval"/>
      <SelectTag  selectedValue={defaultValue} option={propertyOptions} id="type" label={"Select property type"}  setValue={setValue}/>
        <SelectTag  selectedValue={defaultValue} option={genderOption} id="genderType" label={"Select gender type"} setValue={setValue}/>
        <SelectTag  selectedValue={defaultValue} option={waterSupplyOption} id="waterSupply" label={"Select water supply"} setValue={setValue}/>
        <SelectTag  selectedValue={defaultValue} option={electricitySupplyOption} id="electricitySupply" label={"Select electricity supply"} setValue={setValue}/>
        <SelectTag  selectedValue={defaultValue} option={bathroomTypeOption} id="bathroomType" label={"Select bathroom type"} setValue={setValue}/>
      </section>

       <MainImageUpload setValue={setValue}/>
      <p className=' font-semibold'>
          Add photos
        </p>
   <section className=' gap-3 flex w-max h-max   '>
    <AddphotosListing setValue={setValue} getValues={getValues} id="imagesSrc"/>
    <AddphotosListing setValue={setValue} getValues={getValues} id="imagesSrc"/>
    <AddphotosListing setValue={setValue} getValues={getValues} id="imagesSrc"/>
    <AddphotosListing setValue={setValue} getValues={getValues} id="imagesSrc"/>
    

   </section>


      
    </div>
  )
}


export function SelectTag({option,id,setValue,label,selectedValue}){
  return (
   <div className=' w-full p-2 flex flex-col gap-[8px] '>
    <label  className=' font-semibold text-sm  tracking-wide '>{label}</label>
     <select defaultValue={selectedValue?.[id]} id={label}  onChange={(event)=>{
      setValue(id,event.target.value)
    }} className=' outline-none px-2 text-gray-800 text-sm w-full h-[43.2px] border bg-[#F9F9F9] pl-2  rounded-md'>
      {
        option.map((items)=>{
          return <option  className=' p-2 text-black  ' key={items.value}  value={items.value}>{items.value}</option>
        })
      }

      
    </select>
   </div>
  )
} 
