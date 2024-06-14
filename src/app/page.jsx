import HomeScreen from "@/components/homeScreen/Home";
import GettingStart from "@/components/mobile/GettingStart";
import Image from "next/image";
import getUser from "@/actions/nextAuthActions/getUser";

export default async function Home() {
    const user = await getUser();



    return ( 
        <div className=" w-full h-max">
           <HomeScreen/>
           {(user === null) &&(
                <GettingStart/>
           )

           }
        </div>
    );
}