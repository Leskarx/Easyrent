import HomeScreen from "@/components/homeScreen/Home";


import getUser from "@/actions/nextAuthActions/getUser";
import getListing from '@/actions/getListing/getListing'

export default async function Home() {
    const user = await getUser();
   
    const listing=await getListing()



    return ( 
        <div className=" w-full h-max">
           <HomeScreen user={user} listing={listing}/>
         
        </div>
    );
}