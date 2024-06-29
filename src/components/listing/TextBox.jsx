import { set } from 'date-fns'
import React from 'react'

export default function TextBox({label,register,objectId,type="text",placeholder}) {
  return (
    <div className=' p-2 w-full'>
        <label className=' font-semibold text-sm tracking-wide'>{label}</label>
        <input placeholder={placeholder} onWheel={event => event.currentTarget.blur()}  {...register(objectId, { required: true })} type={type} className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full p-2 mt-1 outline-none bg-[#F9F9F9]  border-2 rounded-lg ' />
      
    </div>
  )
}


export function ProfileTextbox({label,objectId,type="text",placeholder,value,setvalue,useState}) {
  const [valuew,setValuew]=useState(value)
  return (
    <div className=' p-2 w-full'>
        <label className=' font-semibold text-sm'>{label}</label>
        <input value={valuew||""} onChange={(event)=>{
          setValuew(event.target.value)
          setvalue(objectId,event.target.value)
        
        }} placeholder={placeholder} onWheel={event => event.currentTarget.blur()}   type={type} className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full p-2 mt-1 outline-none bg-[#F9F9F9]  border-2 rounded-lg ' />
      
    </div>
  )
}
