import HomeScreen from "@/components/homeScreen/Home";
import GettingStart from "@/components/mobile/GettingStart";
import Image from "next/image";

export default function Home() {
    return ( 
        <div>
           <HomeScreen/>
           <GettingStart/> 
        </div>
    );
}