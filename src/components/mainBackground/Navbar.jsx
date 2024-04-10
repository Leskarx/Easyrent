import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className=' absolute -top-10 md:block hidden  w-full text-white p-2'>
<div className=' w-full h-full flex justify-between items-center '>
<Image
src={"/Blue Simple Classic Property Real Estate Logo 2.png"}
alt="LOgo"
quality={100}
priority
sizes='10vw'
width={150}
height={70}
/>

<ul className=' flex gap-10 mr-2'>
    <li>Login/SignUp</li>
    <li>Legal</li>
    <li>Support</li>
    <li>About Us</li>
</ul>

</div>
      
    </div>
  )
}
