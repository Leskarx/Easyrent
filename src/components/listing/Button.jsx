import React from 'react'

export default function Button({label,onClick}) {
  return (
    <div className=' text-center  border-2  border-slate-300 py-2 w-[80%] '>
        <button onClick={()=>{
            onClick()
        }} className=' text-4xl font-bold '>{label}</button>
      
    </div>
  )
}
