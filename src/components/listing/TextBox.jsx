import React from 'react'

export default function TextBox({label,register,objectId,type="text"}) {
  return (
    <div className=' p-2 w-full'>
        <label className=' font-semibold text-sm'>{label}</label>
        <input onWheel={event => event.currentTarget.blur()}  {...register(objectId, { required: true })} type={type} className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full p-2 mt-1 outline-none  border-2  border-slate-300 ' />
      
    </div>
  )
}
