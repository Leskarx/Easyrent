import React from 'react'
import Image from 'next/image'

export default function LogoSectionNav() {
  return (
    <section className=' relative  h-[80px] w-[200px] '>
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
  )
}
