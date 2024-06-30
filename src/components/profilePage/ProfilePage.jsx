"use client";
import React from 'react'
import Navbar from '@/components/utils/navbar/Navbar'
import {useState} from 'react'
import MobileScreenNavbar from '@/components/utils/navbar/MobileScreenNavbar'
import { useRouter } from 'next/navigation';
import { TiArrowLeftThick } from "react-icons/ti";
import LoadingScreen from '../loadingScreen/LoadingScreen';
import Image from 'next/image';
import {ProfileTextbox} from '../listing/TextBox';
import { useForm } from 'react-hook-form';
import { CldUploadWidget } from 'next-cloudinary';
import { SelectTag } from '../listing/LeftSection';
import Button from '../utils/Button/Button';
import toast from 'react-hot-toast';
import { parse } from 'date-fns';


export default function ProfilePage({user}) {
    // hooks and variables
    let phoneNumberinInt
    let ageInt
    if(user?.phoneNumber!=null){
      phoneNumberinInt=parseInt(user?.phoneNumber)
    }
    if(user?.age!=null){
      ageInt=parseInt(user?.age)
    }
 const genderOption=[{
      value:"others"
    },
    {
    value:"Male"
    },
    {
    value:"Female"
    }]
    const [toggle,setToggle]=useState(true)
    const {
        
        handleSubmit,
        setValue,
        
        
        
    }=useForm({
        name:user?.name,
        email:user?.email,
        phoneNumber:user?.phoneNumber,
        image:user?.image,
        gender:user?.gender,
        age:user?.age,
        address:user?.address
    })
 const router=useRouter()
const [src,setSrc]=useState(user?.image || "/placeholder.png")
  const [loadingScreen,setLoadingScreen]=useState(false)
    // components


    function ProfileSection(){
        return(
            <main className=' w-full py-2 '>
                <section className=' w-[50%]  flex items-center gap-5'>
                <main className=' flex flex-col gap-3'>
                <div>
     <CldUploadWidget options={{
        maxFiles:1
     }} onUpload={handleUpload}
     onSuccess={(results)=>{
        console.log(results);
     }}
     uploadPreset="ml_default">


  {({ open }) => {
    return (
        <section onClick={()=>{
            open?.()
        }} className=" relative rounded-full w-[100px] aspect-square ">

            
              
                  <div className=' rounded-full w-full h-full inset-0'>
                    <Image
                    className=' rounded-full'
                   alt='profile'
                   src={src}
                   quality={100}
                   priority                                                      
                  fill 
                  style={{
                   objectFit:'cover'
                  }}
                  


                   />
                  </div>
            
            
     

        </section>
  
    );
  }}
</CldUploadWidget>
    </div>

               
                </main>
               <div>
               <p className=' font-semibold text-lg'>
                    {user?.name}
                </p>
                <p className=' text-sm text-slate-500'>
                    {user?.email}
                </p>
               </div>
                </section>
              

            </main>
        )
    }
  







    // other functionA
  
    function handleUpload(results){
      setSrc(results?.info?.secure_url)
      setValue("image",results?.info?.secure_url)
      // console.log(" main image upload log->>>.",results?.info?.secure_url);
  }

    async function onSubmit(data){{try {
      
        if(Object.keys(data).length==0){
          return
         
        }
        
        data={...data,id:user?.id}
          setLoadingScreen(true)
          const response=await fetch('/api/updateProfile',{
              method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(data)
          })
        
          
          if(response.ok){
            setLoadingScreen(false)
            toast.success('Profile Updated Successfully')
              
              router.refresh()
            }
    } catch (error) {
      setLoadingScreen(false)
        toast.error('Something went wrong')

      
    }

        
    }}
    


// return starts here
  return (
    <>
    {
      loadingScreen && <LoadingScreen/>

    }
   
    <div className=' w-full h-screen'>
      
     <MobileScreenNavbar user={user} hidebanner/>
     <section className=' relative flex flex-col w-full h-max '>
<Navbar user={user} homePage />
  
   </section>

        <section className='flex  absolute top-4 sm:top-4 md:top-24 flex-col gap-4 w-full h-max min-h-[87%] px-6  pb-16 pt-1 md:px-10 md:py-6 overflow-x-hidden  bg-white' >
<section className=' w-[90%] mx-auto flex flex-col gap-3 '>
  <div onClick={()=>{
    router.back()
  }} className=' w-max block md:hidden h-max cursor-pointer'>
  <TiArrowLeftThick size={20}/>
  </div>
<ProfileSection/>
<main className='w-full  flex flex-col md:flex-row '>
  {/* left div */}
  <div className=' w-full md:w-1/2'>
    <ProfileTextbox label='Full Name' placeholder={"Enter Your Full Name"} useState={useState} value={user?.name} objectId={"name"} setvalue={setValue}/>
    <ProfileTextbox label='Email' placeholder={"Enter Your Email ID"} useState={useState} value={user?.email} objectId={"email"} setvalue={setValue}/>
    <ProfileTextbox type='number' label='Phone No' placeholder={"Enter Your Phone No"} useState={useState} value={phoneNumberinInt} objectId={"phoneNumber"} setvalue={setValue}/>
   
   
    
    


  </div>
  {/* right div */}
 <div className=' w-full md:w-1/2'>
  <ProfileTextbox label='Address' placeholder={"Enter Your Address"} useState={useState} value={user?.address} objectId={"address"} setvalue={setValue}/>
 <ProfileTextbox type='number' label='Age' placeholder={"Enter Your Age"} useState={useState} value={ageInt} objectId={"age"} setvalue={setValue}/>
  <SelectTag selectedValue={user?.gender} option={genderOption} setValue={setValue} id={"gender"} label={"Gender"}/>
  

 </div>
</main>
<div className=' w-full mt-0 md:mt-6 md:w-[20%] self-center'>
  <Button handleSubmit={handleSubmit(onSubmit)} buttonTitle={"Update Profile"} />
</div>

</section>






  </section>  
    

    
   
    </div>
    </>
  )
}


