import SearchPage from '@/components/searchPage/SearchPage'
import React from 'react'
import getUser from '@/actions/nextAuthActions/getUser'


export default  async function page({children}) {
  const user=await getUser()

  return (
    <SearchPage user={user}>
{children}
    </SearchPage>
    
    
   
  )
}
