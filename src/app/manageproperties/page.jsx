import React from 'react'
import getUser from '@/actions/nextAuthActions/getUser'
import ManageProperties from '@/components/manageProperties/ManageProperties'
import getListingByUserId from '@/actions/manageProperties/getListingByUserId'
import getRequestUpdate from '@/actions/getRequestUpdates/getRequestUpdate'


export default async  function page() {
    const user=await getUser()
    const userId=user.id
    const listing=await getListingByUserId(userId)
    const getRequsetUpdate=await getRequestUpdate(listing)
    console.log("update data........>",getRequsetUpdate);

    
  return (
   
    <ManageProperties user={user} booking={listing} request={getRequsetUpdate}   />
  )
}
