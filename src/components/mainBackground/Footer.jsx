import React from 'react'

export default function Footer({mobileHide=false}) {
  return (
    <div className={` ${mobileHide?"md:block hidden":"block"}  absolute bottom-0 right-0 left-0 text-white w-full bg-red-600  py-2 md:p-5`}>
<div className=' w-full h-full flex justify-center md:justify-between ' >
<p className=' md:block hidden'>
        EASERENT © 2024 
        </p>
        <p className=' text-sm md:text-base'>
        Designed and Developed by KUHUB TEAM
        </p>
</div>
      
    </div>
  )
}
