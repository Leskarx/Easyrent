import React from 'react'
import AlreadySection from '../utils/AlreadySection'
import InputBox from '../utils/InputBox'
import MainSection from '../utils/MainSection'
import { useForm } from "react-hook-form"

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } =useForm({
    email:"",
    username:"",
    number:"",
    password:"",

  })
  function onSubmit(data){
    console.log(data)
  }
    const footer=(
        <>
        
        <AlreadySection link='/login' des="Already have an account?" buttonTitle="Login" />
       
        </>
      )
    
      const body=(
        <>
        <div>
        <InputBox register={register} errors={errors} objectId="email" placeholder="Email" type="text" name="email" />
        <InputBox register={register} errors={errors} objectId="username" placeholder="Name" type="text" name="username" />
        <InputBox register={register} errors={errors} objectId="number" placeholder="Phone number" type="text" name="number" />
        <InputBox register={register} errors={errors} objectId="password" placeholder="Password" type="password" name="password" />
        </div>
        
        </>
      )
    
      return (
        <div className=' w-full h-full flex justify-center items-center md:mb-10 mb-0 '>
      <MainSection title="Register" para='Create an account to access all the features of EASYRENT!' handleSubmit={handleSubmit(onSubmit)} buttonTitle="Register" footer={footer} body={body} showGprovider={false} />
        </div>
      )
}
