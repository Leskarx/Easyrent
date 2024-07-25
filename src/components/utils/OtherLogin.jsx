// Desc: This file contains the code for the google login button
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { signIn} from "next-auth/react"

export default function OtherLogin({des,setLoadingScreen}) {
  return (
    <div  onClick={()=>{
      setLoadingScreen(true);
      signIn("google")
    }}  className=' cursor-pointer w-full flex  justify-center gap-5 border-2 border-black
    rounded-xl
    items-center   p-2'>
      <FcGoogle size={35} />
      <p className=' font-medium text-lg lg:text-xl '>{des}</p>
    </div>
  )
}
