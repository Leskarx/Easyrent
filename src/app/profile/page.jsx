import ProfilePage from '@/components/profilePage/ProfilePage'
import React from 'react'
import getUser from '@/actions/nextAuthActions/getUser'

export default async function page() {
  const user=await getUser()
  return (
    <>
    
    <ProfilePage user={user}/>
    </>
  )
}
