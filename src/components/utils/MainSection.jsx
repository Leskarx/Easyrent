import React from 'react'

export default function MainSection({title,para,body,buttonTitle,handleSubmit}) {
  return (
    <div className=' p-3  min-h-screen md:min-h-[30%] md:w-[33%] w-full bg-white rounded-lg shadow-4xl flex flex-col justify-between  '>
    <div className=' w-full flex flex-col gap-2'>
    <p>
       {title}
       </p>
       <p>
        {para}
       </p>
    </div>
       <div className=' w-full'>
        {body}
       </div>
       <button className=' rounded-lg w-full p-4 bg-red-500 text-white text-center '  onClick={handleSubmit}>
{buttonTitle}
       </button>


     
    </div>
  )
}
