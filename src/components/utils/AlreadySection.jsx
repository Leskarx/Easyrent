import React from 'react'
import Link from 'next/link'

export default function AlreadySection({link="/",des,buttonTitle}) {
  return (
    <section className=' self-center font-normal md:font-medium md:text-sm text-xl  w-max '>
        <p>
       {des}
      <span className=' cursor-pointer underline text-red-600 '>  <Link href={link}>
       {buttonTitle}
        </Link></span>
        </p>
      </section>
  )
}
