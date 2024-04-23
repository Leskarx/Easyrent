import React from 'react'

export default function TextBox({label,register,objectId}) {
  return (
    <div className=' p-2 w-full'>
        <label className=' font-semibold text-sm'>{label}</label>
        <input  {...register(objectId, { required: true })} type="text" className=' w-full p-2 mt-1 outline-none  border-2  border-slate-300 ' />
      
    </div>
  )
}
