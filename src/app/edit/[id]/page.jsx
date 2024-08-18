import Listing from "@/components/listing/Listing";
import getUser from "@/actions/nextAuthActions/getUser";
import { getListingById } from "@/actions/getListingById/getListingByCategory";


export default async function page({params}) {
  const user = await getUser();
  const defaultValue=await getListingById(params.id)
  console.log("default value............in page",defaultValue)
  return (
    <Listing user={user} defaultValue={defaultValue}/>
   
  )
}
