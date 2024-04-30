import React from 'react'
import { PulseLoader
} from 'react-spinners';


export default function Button({isLoading,handleSubmit,buttonTitle}) {
  return (
    <button disabled={isLoading} className={
        ` ${isLoading?'bg-red-400':'bg-red-500'} flex items-center justify-center rounded-lg w-full p-4  text-white text-center `
       }  onClick={handleSubmit}>
   
  <div>
  
    {
      isLoading? <PulseLoader
      color={"#fff"}
      loading={true}
      size={10}
      aria-label="Loading Spinner"
      data-testid="loader"
    />:
       <p>
         {buttonTitle}
       </p>
      
    }
       
  
  </div>
         </button>
  )
}
