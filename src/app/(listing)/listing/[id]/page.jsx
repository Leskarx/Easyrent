// Code Generated with love

import React from 'react'
import { getListingById } from '@/actions/getListing/getListing';
import getUser  from '@/actions/nextAuthActions/getUser';
import ListingDetail from '@/components/listingDetails/ListingDetail';


export default async function page({params}) {
   const [listingData,owner]= await getListingById(params.id)
  
   const user=await getUser()
  //  const isBooked=await checkBooked(params.id,user)
   console.log("listing detail page owner.....> ",user);
   
  return (
    
   <ListingDetail  listingData={listingData} ownerData={owner} currentUser={user} />
  
  )
}
