"use client"
import React from 'react'
import AlreadySection from '../utils/section/AlreadySection'
import InputBox from '../utils/InputBox'
import MainSection from '../utils/section/MainSection'
import { useForm } from "react-hook-form"
import { signIn} from "next-auth/react"
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import LoadingScreen from '@/components/loadingScreen/LoadingScreen';
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
  const [loading,setLoading]=React.useState(false)
  const [loadingScreen, setLoadingScreen] = React.useState(false)

  async function onSubmit(data){
  try {
    setLoading(true)
    const isLogin=await signIn("credentials",{...data,redirect:false})
    // console.log(isLogin);
    if(isLogin.ok){
      toast.success("Login successfull")
      router.push("/")
      router.refresh()
    }else{
      toast.error("something went wrong")
      setLoading(false)
    }
   
    
  } catch (error) {
    toast.error("something went wrong please refresh")
    
  }
   
    
  }

  const footer=(
    <>
    
    <AlreadySection setLoadingScreen={setLoadingScreen} link='/signup' des="Don’t have an account?" buttonTitle="Register" />
   
    </>
  )

  const body=(
    <>
    <div>
    <InputBox register={register} errors={errors} objectId="email" placeholder="Email" type="text" name="email" />
    <InputBox register={register} errors={errors} objectId="password" placeholder="Password" type="password" name="password" passwordField />
    {/* <InputBox title="Password" type="password" /> */}
    </div>
    
    </>
  )

  return (
   <>
   {
  loadingScreen&&(
    <LoadingScreen/>
  )
}
    <div className=' w-full h-full flex justify-center items-center '>
  <MainSection title="Login" para='Login now to get your next Perfect Home. ' buttonTitle="Login" footer={footer} handleSubmit={handleSubmit(onSubmit)} body={body} showGprovider={true} isLoading={loading} setLoadingScreen={setLoadingScreen} />
    </div>
   </>
  )
}
