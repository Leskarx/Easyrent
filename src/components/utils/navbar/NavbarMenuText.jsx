import React from 'react'
import Link from 'next/link'

export default function NavbarMenuText({Title="title",link="/"}) {
  return (
  <Link href={link}>
    <main>

<p className=' w-full pl-3 py-2 font-medium text-slate-700 h-max hover:bg-slate-200 
   transition cursor-pointer 
'>{Title}</p>

    </main>
  
  </Link>
  )
}
