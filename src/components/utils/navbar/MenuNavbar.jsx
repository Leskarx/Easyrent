import React from 'react'
import NavbarMenuText from './NavbarMenuText'
import { signOut } from 'next-auth/react'


export default function MenuNavbar({user}) {
  return (
    
     <div className=" absolute top-14 z-[500] rounded-lg right-0 md:w-[11rem] lg:w-[15rem] shadow-black/55 shadow-lg  py-2 bg-white h-max backdrop   hidden md:block">
   {

user?
// with login
<main className=' flex flex-col gap-2'>
<NavbarMenuText Title="Profile" link='/profile'/>
<NavbarMenuText Title="My favourite" link='/myfavourite'/>
<NavbarMenuText Title="My booking" link='/mybooking'/>
<NavbarMenuText Title="Manage your properties" link='/manageproperties'/>
<NavbarMenuText Title="About us" link='/aboutus'/>

<div onClick={ ()=>{
    signOut()
}}>
<NavbarMenuText Title="Log out" link='/signup'/>
</div>
   
</main>

:
// without login
 <main className=' flex flex-col gap-2'>
<NavbarMenuText Title="Sign up" link='/signup'/>
    <NavbarMenuText Title="Log in" link='/login'/>
    <NavbarMenuText Title="About us" link='/aboutus'/>
</main>

   }
        </div>
   
   
  )
}
