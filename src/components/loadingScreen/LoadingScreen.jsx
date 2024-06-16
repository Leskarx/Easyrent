import React from 'react'
import "../../../style/loader/loader.css"


export default function LoadingScreen() {
  return (
   <>
    <div className=' fixed flex justify-center items-center inset-0 bg-slate-200  opacity-55 z-[1100]'>
  </div>
  <main className=' inset-0 z-[1101] fixed flex justify-center items-center'>
  <div className="loader"></div> 
  </main>
   </>
  )
}

/*
 HTML: 


*/
