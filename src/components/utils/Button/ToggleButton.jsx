import React, { useState } from 'react'

export default function ToggleButton({listingId,isAvailable}) {
  const [isChecked, setIsChecked] = useState(isAvailable)
  console.log("toggleeeeeeeeeee");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <label className='flex cursor-pointer select-none items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block h-6 w-12 rounded-full ${
              isChecked ? 'bg-red-500' : 'bg-black'
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition ${
              isChecked ? 'translate-x-[150%]' : ''
            }`}
          ></div>
        </div>
      </label>
    </>
  )
}


