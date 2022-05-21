import React from 'react'


export default function Toogle () {
  return (
   <>
   {/* <label htmlFor="check" className="bg-gray-100 cursor-pointer relative w-10 h-5 rounded-full inline-block">
     <input type = "checkbox" id = "check" className='sr-only peer'/>
      <span className = "w-5 h-3 bg-red-300 rounded-full shadow">
      </span>
   </label> */}
   <div>
   <label htmlFor = "check" className="bg-[#ccc] cursor-pointer relative w-11 h-5 rounded-full inline-block">
   <input type= "checkbox" id='check' className='sr-only peer'  />
      <span className = "w-3.5 h-3 bg-white absolute rounded-full top-1 left-1 peer-checked:bg-black peer-checked:left-6 duration-500"></span>
   </label>
   </div>
  
   </>
  )
}
