import React from 'react'
import getMybooking from '@/actions/getMybooking/getMybooking'
import getUser from '@/actions/nextAuthActions/getUser'
import MyBooking from '@/components/Booking/Mybooking'

export default async function page() {
  const user= await getUser()
  const booking = await getMybooking(user)
 
  return (
    <MyBooking booking={booking} user={user} />
  )
}
