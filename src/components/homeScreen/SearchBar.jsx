import React from 'react'

export default function SearchBar() {
  return (
    <div className=' p-6 h-max bg-white w-max'>
        <h1>Studying outside your Home-Town?</h1>
        <label htmlFor="location">Location</label>
        <input type="text" className='outline-none border border-slate-600 p-3 rounded-lg' />
        <button className=' bg-red-500 px-6 py-2 rounded-xl'>Search</button>

      
    </div>
  )
}
