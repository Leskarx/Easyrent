import React, { useEffect } from 'react'
import Button from './Button'


export default function CountSection({id,setFormValue,label,defaultValue}) {
    
    useEffect(()=>{
        setFormValue(id,defaultValue?.roomCount||0)
    
    },[])


    const [value, setValue] = React.useState(defaultValue?.[id]||0)
    function increment(){
        setValue(value+1)
        setFormValue(id,value+1)
    } 
    function decrement(){
        if(value===0) return
        setValue(value-1)
        setFormValue(id,value-1)
    }

  return (
    <div className='   p-2 flex flex-col items-center font-semibold text-sm  '>
        <label className='font-semibold text-sm tracking-wide' htmlFor="input">
            {label}
        </label>

  <section id='input' className='flex '>   <Button onClick={decrement} label="-"/>
     <input disabled type="text" value={value} className=' text-center border-2  border-slate-300  outline-none w-full px-2' />
     <Button  onClick={increment} label="+"/></section>
    </div>
  )
}
