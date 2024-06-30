import React from 'react'
import getUser from '@/actions/nextAuthActions/getUser'
import getListingBycategory from '@/actions/getListingById/getListingByCategory'
import ExploreCategory from '@/components/exploreCategory/ExploreCategory'

export default async function page({params}) {
    const user=await getUser()
    const listing=await getListingBycategory(params.category)

  return (
   <ExploreCategory listing={listing} user={user} category={params.category}/>
  )
}
