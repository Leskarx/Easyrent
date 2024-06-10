"use client";
import React, {  useState } from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
// heart is pending

export default function Heartbutton() {
const [toggle, setToggle] = useState(false)
const handleClick = () => {
  setToggle((prev) => !prev)
    console.log(toggle);
}
  return (
    <div onClick={handleClick} className=' relative '>
        
    <AiOutlineHeart size={28} className='z-10 absolute right-0 text-white' />
    <AiFillHeart size={28} className=' z-0   text-black absolute right-0  opacity-50 ' />

    </div>
  )
}
