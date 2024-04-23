"use client"
import React from 'react'
import AlreadySection from '../utils/AlreadySection'
import InputBox from '../utils/InputBox'
import MainSection from '../utils/MainSection'
import { useForm } from "react-hook-form"
import { signIn} from "next-auth/react"
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
export default function Login() {
  const router=useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } =useForm({
    email:"",
    password:""
  })

  async function onSubmit(data){
  try {
    const isLogin=await signIn("credentials",{...data,redirect:false})
    console.log(isLogin);
    if(isLogin.ok){
      toast.success("Login successfull")
      router.push("/")
      router.refresh()
    }else{
      toast.error("something went wrong")
    }
   
    
  } catch (error) {
    toast.error("something went wrong please refresh")
    
  }
   
    
  }

  const footer=(
    <>
    
    <AlreadySection link='/signup' des="Don’t have an account?" buttonTitle="Register" />
   
    </>
  )

  const body=(
    <>
    <div>
    <InputBox register={register} errors={errors} objectId="email" placeholder="Email" type="text" name="email" />
    <InputBox register={register} errors={errors} objectId="password" placeholder="Password" type="password" name="password" />
    {/* <InputBox title="Password" type="password" /> */}
    </div>
    
    </>
  )

  return (
    <div className=' w-full h-full flex justify-center items-center '>
  <MainSection title="Login" para='Login now to get your next Perfect Home. ' buttonTitle="Login" footer={footer} handleSubmit={handleSubmit(onSubmit)} body={body} showGprovider={true} />
    </div>
  )
}
