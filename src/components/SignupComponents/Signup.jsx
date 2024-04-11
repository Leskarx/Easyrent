import React from 'react'
import AlreadySection from '../utils/AlreadySection'
import InputBox from '../utils/InputBox'
import MainSection from '../utils/MainSection'

export default function Signup() {
    const footer=(
        <>
        
        <AlreadySection link='/login' des="Already have an account?" buttonTitle="Login" />
       
        </>
      )
    
      const body=(
        <>
        <div>
        <InputBox title="Email" type="text" name="email" />
        <InputBox title="Name" type="text" name="username" />
        <InputBox title="Phone Number" type="text" name="mobile" />
        <InputBox title="Password" type="password" />
        </div>
        
        </>
      )
    
      return (
        <div className=' w-full h-full flex justify-center items-center md:mb-10 mb-0 '>
      <MainSection title="Register" para='Create an account to access all the features of EASYRENT!' buttonTitle="Register" footer={footer} body={body} showGprovider={false} />
        </div>
      )
}
