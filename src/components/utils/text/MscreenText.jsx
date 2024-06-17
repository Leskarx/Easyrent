import React from 'react'

export default function MscreenText({title="Title",placeholder="search",type="text",value,setValue}) {
  return (
    <div className=' w-[14rem] h-[4.4rem] '>
      <p className=' font-medium '>{title}</p>
      <input onWheel={event => event.currentTarget.blur()} value={value} onChange={(event)=>{
        setValue(event.target.value)
      }} type={type} placeholder={placeholder} className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  border-2 border-black/10  outline-none w-full p-2 overflow-scroll  ' />


      
    </div>
  )
}
