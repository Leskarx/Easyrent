import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function LogoSectionNav() {
  return (
   <Link href={"/"}>
    <section className=' cursor-pointer relative  h-[80px] w-[200px] '>
    <div className=' inset-0'>
    <Image
    src={"/logo.png"}
    alt="LOgo"
    fill
    priority
    style={{objectFit:"contain"}}
    />
    </div>
    </section>
   </Link>
  )
}
