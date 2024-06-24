import Listing from "@/components/listing/Listing";
import getUser from "@/actions/nextAuthActions/getUser";


export default async function page() {
  const user = await getUser();
  return (
    <Listing user={user}/>
   
  )
}
