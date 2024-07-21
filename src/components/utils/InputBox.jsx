"use client";
import {useState} from 'react'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

export default function InputBox({objectId,name,type,register,errors,placeholder,passwordField=false}) {
const [input,setInput]=useState("")
const [showPassword,setShowPassword]=useState(type)
// console.log(errors);

  return (
    <div className='relative mt-4'>
      <input
      {...register(objectId, { required: true })}
      type={(passwordField)?showPassword:type} name={name} value={input} onChange={(event)=>{
        setInput(event.target.value)

      }} placeholder=" " id={objectId} className={`
      rounded-lg border-2 
      ${errors[objectId]?"border-rose-600":" border-neutral-300 "}
      ${errors[objectId]?"focus:border-black":" focus:border-black "}
      peer w-full px-2 py-3 outline-none font-semibold`} />
      <label htmlFor={objectId}  className={(input=="")?" text-black/70 cursor-text transform duration-150 transtion z-10 text-md peer-focus:text-black/70 bg-white  peer-focus:scale-75 peer-focus:top-0  absolute top-1/2 left-2 -translate-y-1/2  origin-[0] ":"z-10 text-md scale-75 absolute top-0 left-2 -translate-y-1/2   origin-[0] bg-white"}>{placeholder}</label>
      {passwordField && <div onClick={()=>{
        if(showPassword=="password"){
          setShowPassword("text")

        }else{
          setShowPassword("password")
        }
            
          }} >
       {
          (showPassword=="password")?
          <IoEye className="absolute top-1/2 right-2 -translate-y-1/2 text-black/70 cursor-pointer"  />
          :
          <IoEyeOff className="absolute top-1/2 right-2 -translate-y-1/2 text-black/70 cursor-pointer"/>
       }
        </div>}
      
    </div>
  )
}
// onClick={()=>{
//   setShowPassword(!showPassword)
// }} 



