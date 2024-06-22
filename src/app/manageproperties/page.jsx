import React from 'react'
import getUser from '@/actions/nextAuthActions/getUser'
import ManageProperties from '@/components/manageProperties/ManageProperties'
import getListingByUserId from '@/actions/manageProperties/getListingByUserId'


export default async  function page() {
    const user=await getUser()
    const userId=user.id
    const listing=await getListingByUserId(userId)
    
  return (
   
    <ManageProperties user={user} booking={listing}   />
  )
}
