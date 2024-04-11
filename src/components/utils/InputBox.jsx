import React from 'react'

export default function InputBox({title,type,name}) {
  return (
    <div className=' w-full flex flex-col gap-2  p-2'>
        <p className=' font-normal text-sm'>{title}</p>
        <input type={type} name={name} className=' p-3 outline-none rounded-xl border-2 border-slate-300' placeholder={title} />

      
    </div>
  )
}
