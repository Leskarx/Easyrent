import React from 'react'
import AlreadySection from '../utils/AlreadySection'
import InputBox from '../utils/InputBox'
import MainSection from '../utils/MainSection'

export default function Login() {
  const footer=(
    <>
    
    <AlreadySection link='/signup' des="Don’t have an account?" buttonTitle="Register" />
   
    </>
  )

  const body=(
    <>
    <div>
    <InputBox title="Email" type="text" name="email" />
    <InputBox title="Password" type="password" />
    </div>
    
    </>
  )

  return (
    <div className=' w-full h-full flex justify-center items-center '>
  <MainSection title="Login" para='Login now to get your next Perfect Home. ' buttonTitle="Login" footer={footer} body={body} showGprovider={true} />
    </div>
  )
}
