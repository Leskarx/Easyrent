"use client"
import React from 'react'
import AddphotosListing from './AddphotosListing'
import MainImageUpload from './MainImageUpload'

export default function LeftSection({setValue,getValues}) {
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
 const genderOption=[{
    value:"Any"
  },
{
  value:"Male"
},
{
  value:"Female"
}]
const propertyOptions=[{
  value:"Rent"
},
{
value:"PG"
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
    <div className=' gap-6 flex flex-col justify-center items-center w-full md:w-[50%] h-full border-0 md:border-l border-slate-400 '>
      <section className=' w-full flex flex-col gap-4 h-max pt-3 pl-2 md:pl-12'>
      <SelectTag option={paymentIntervalOption} setValue={setValue} id="paymentInterval" label="Select payment interval"/>
      <SelectTag option={propertyOptions} id="type" label={"Select property type"}  setValue={setValue}/>
        <SelectTag option={genderOption} id="genderType" label={"Select gender type"} setValue={setValue}/>
        <SelectTag option={waterSupplyOption} id="waterSupply" label={"Select water supply"} setValue={setValue}/>
        <SelectTag option={electricitySupplyOption} id="electricitySupply" label={"Select electricity supply"} setValue={setValue}/>
        <SelectTag option={bathroomTypeOption} id="bathroomType" label={"Select bathroom type"} setValue={setValue}/>
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


export function SelectTag({option,id,setValue,label}){
  return (
   <div className=' w-full '>
    <label  className=' font-semibold text-sm mb-1'>{label}</label>
     <select id={label}  onChange={(event)=>{
      setValue(id,event.target.value)
    }} className=' outline-none p-2  w-full h-10 border border-slate-400 rounded-md'>
      {
        option.map((items)=>{
          return <option className=' p-2' key={items.value}  value={items.value}>{items.value}</option>
        })
      }

      
    </select>
   </div>
  )
} 
