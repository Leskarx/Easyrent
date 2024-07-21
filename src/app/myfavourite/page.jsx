import React from 'react'
import Myfavourite from '@/components/myFavourite/Myfavourite'
import { getF } from '@/actions/getFavourite/getFavourite'

import getUser from '@/actions/nextAuthActions/getUser'


export default async function page() {
  const user= await getUser()
  const favData= await getF(user)
  // console.log("favData.......>",favData);

 
  return (
    <main className=' '>
      <Myfavourite  favData={favData} user={user} />
    </main>
    
  )
}
