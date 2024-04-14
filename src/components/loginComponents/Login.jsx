"use client"
import React from 'react'
import AlreadySection from '../utils/AlreadySection'
import InputBox from '../utils/InputBox'
import MainSection from '../utils/MainSection'
import { useForm } from "react-hook-form"

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } =useForm({
    email:"",
    password:""
  })

  function onSubmit(data){
    console.log(data)
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
