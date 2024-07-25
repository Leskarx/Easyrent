"use client"
import React from 'react'
import AlreadySection from '../utils/section/AlreadySection'
import InputBox from '../utils/InputBox'
import MainSection from '../utils/section/MainSection'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { signIn} from "next-auth/react"
import { useRouter } from 'next/navigation'
import LoadingScreen from '../loadingScreen/LoadingScreen'



export default function Signup() {
  const router=useRouter()
  const [loading,setLoading]=React.useState(false)
  const [loadingScreen,setLoadingScreen]=React.useState(false)
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
  async function onSubmit(data){
try {
  
      setLoading(true)
      const response=await axios.post("/api/register",data)
      if(response.data.message=="email already exist"){
        toast.error("Email already exist")
        setLoading(false)
        return
      }
      
      const filteredData={
        email:response.data.userData.email,
        password:data.password
      }
      console.log("response data....>",response.data);
    
      const isLogin=await signIn("credentials",{...filteredData,redirect:false})
     
      if(isLogin.ok){
        toast.success("successfully created a account")
        setLoading(true)
        router.push("/")
        router.refresh()
      }else{
        
        toast.error("successfully created a account but login failed...")
        setLoading(false)
      }
} catch (error) {
 
  toast.error("something went wrong")
  setLoading(false)
  
}
    
  }
    const footer=(
        <>
        
        <AlreadySection setLoadingScreen={setLoadingScreen} link='/login' des="Already have an account?" buttonTitle="Login" />
       
        </>
      )
    
      const body=(
        <>
        <div>
        <InputBox register={register} errors={errors} objectId="email" placeholder="Email" type="text" name="email" />
        <InputBox register={register} errors={errors} objectId="username" placeholder="Name" type="text" name="username" />
        <InputBox register={register} errors={errors} objectId="number" placeholder="Phone number" type="number" name="number" />
        <InputBox register={register} errors={errors} objectId="password" placeholder="Password" type="password" name="password" passwordField />
        </div>
        
        </>
      )
    
      return (
       <>{
        loadingScreen && (
          <LoadingScreen/>
        )
       }
        <div className=' w-full h-full flex justify-center items-center  mb-0 '>
      <MainSection 
      isLoading={loading} showGprovider={true} setLoadingScreen={setLoadingScreen}
      title="Register" para='Create an account to access all the features of EASERENT!' handleSubmit={handleSubmit(onSubmit)} buttonTitle="Register" footer={footer} body={body}  />
        </div>
       </>
      )
}
