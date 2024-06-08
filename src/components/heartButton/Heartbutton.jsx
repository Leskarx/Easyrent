import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

export default function Heartbutton() {
  return (
    <div className=' relative '>
        
    <AiOutlineHeart size={28} className='z-10 absolute right-0 text-white' />
    <AiFillHeart size={28} className=' z-0   text-black absolute right-0  opacity-50 ' />

    </div>
  )
}
