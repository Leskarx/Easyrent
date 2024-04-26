import getUser from "@/nextAuthActions/getUser";
import Navbar from "@/components/mainBackground/Navbar";
import Footer from "@/components/mainBackground/Footer";


export default async function RootLayout({children}) {
    const currentUser=await getUser()
    console.log("print in layout.jsx user->>>",currentUser);
  return (
   <>
    <Navbar user={currentUser}/>
   {children}
   <Footer/>
   </>
  )
}
