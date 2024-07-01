
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ease Rent",
  description: "Find PG and Rent near you",
  
};


export default  function RootLayout({ children }) {
 

  return (
    <html lang="en">
      <body className={`${inter.className} bg-white overflow-x-hidden`}>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>

{children}


   
       
        </body>
    </html>
  );
}
