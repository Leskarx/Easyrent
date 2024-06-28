"use client";
import React, { useEffect } from 'react'
import Navbar from '@/components/utils/navbar/Navbar'
import {useState} from 'react'
import MobileScreenNavbar from '@/components/utils/navbar/MobileScreenNavbar'
import EmptyPage from '../utils/emptyPage/EmptyPage';
import { useRouter } from 'next/navigation';
import { TiArrowLeftThick } from "react-icons/ti";
import LoadingScreen from '../loadingScreen/LoadingScreen';
import Image from 'next/image';
import {ProfileTextbox} from '../listing/TextBox';
import { useForm } from 'react-hook-form';
import { set } from 'date-fns';



export default function ProfilePage({user}) {
    // hooks and variables
    const [toggle,setToggle]=useState(true)
    const {
        
        handleSubmit,
        setValue,
        
        
        
    }=useForm({
        name:user?.name,
        email:user?.email,
        phone:user?.phone
    })
   
    
    const router=useRouter()
  

 
  const [loadingScreen,setLoadingScreen]=useState(false)
    // components
    function ProfileSection(){
        return(
            <main className=' w-full py-2 '>
                <section className=' w-[50%]  flex items-center gap-5'>
                <div className=' relative w-[100px] aspect-square rounded-full'>
                    <div className=' absolute inset-0'>
                       <Image
                       className=' rounded-full'
                       fill
                       priority
                       alt='Profile image'
                       style={{
                        objectFit: 'cover',
                       }}
                       src={user?.image || '/placeholder.png'}
                       
                       />

                    </div>
                </div>
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







    // start here
    function onSubmit(data){{
        console.log("yupppppppppppppppppie",data);
    }}
    



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
<section className=' w-[90%] mx-auto flex flex-col '>
<ProfileSection/>
<main className='w-full  flex '>
  {/* left div */}
  <div className=' w-1/2'>
    <ProfileTextbox label='Full Name' placeholder={"Enter Your Full Name"} useState={useState} value={user?.name} objectId={"name"} setvalue={setValue}/>
    <ProfileTextbox label='Email' placeholder={"Enter Your Email ID"} useState={useState} value={user?.email} objectId={"email"} setvalue={setValue}/>
    <ProfileTextbox label='Phone No' placeholder={"Enter Your Phone No"} useState={useState} value={user?.phone} objectId={"phone"} setvalue={setValue}/>
   
   
    
    


  </div>
  {/* right div */}
 <div className=' w-1/2'>

 </div>
</main>

</section>






  </section>  
    

    
   
    </div>
    </>
  )
}


