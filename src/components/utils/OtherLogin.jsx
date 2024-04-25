import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { signIn} from "next-auth/react"

export default function OtherLogin({des}) {
  return (
    <div  onClick={()=>{
      signIn("google")
    }}  className=' w-full flex  justify-center gap-5 border-2 border-black
    rounded-xl
    items-center   p-2'>
      <FcGoogle size={35} />
      <p className=' font-medium text-xl '>{des}</p>
    </div>
  )
}
