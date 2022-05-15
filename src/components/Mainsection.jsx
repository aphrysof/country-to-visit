import React, { useState} from 'react'
import Navbar from './Navbar'
import Search from '../logo/search.png'
import Dropdown from '../logo/dropdown.png'
import Card from './Card'


const Mainsection = () => {

const [open, setOpen] = useState(false);

  
    
  return (
    <>
    <div className = "h-screen w-screen overflow-y-auto">
      <Navbar />
      <div className='flex justify-between items-center mx-6'>
      <div className='relative flex items-center'>
          <img src= {Search} alt = 'search' className='absolute ml-3 pointer-events-none' />
          <input type = 'text' placeholder='Search For a Country ...' autoComplete='off' 
          className = 'bg-[#F2F2F2] rounded-[10px] w-[400px] h-[50px] top-24 pr-3 pl-14 py-2 '/>
      </div>
      <div className = ''>
      <button className = 'w-[200px] h-[50px] bg-[#F2F2F2] inline-flex items-center justify-between pl-3 rounded-[10px] mb-[5px]'
       onClick={(() => setOpen(!open))}>Filter by Region<img src = {Dropdown} alt= 'dropdown' />
      </button>
      {
        open &&
        <ul className = "bg-[#F2F2F2] w-[200px] h-[250px] absolute z-10 rounded-[10px] flex flex-col items-center justify-center gap-5 p-0">
         <li className = "cursor-pointer hover:bg-white">Africa</li>
         <li className = "cursor-pointer hover:bg-slate-50">America</li>
         <li className = "cursor-pointer hover:bg-slate-50">Asia</li>
         <li className = "cursor-pointer hover:bg-slate-50">Europe</li>
         <li className = "cursor-pointer hover:bg-slate-50">Oceania</li>
         </ul>
      }
       {/* <Button onClick={openList ? console.log('hello') : console.log('error')}/> */}
          {/* <option value="" selected >Filter by Region</option>
          make button dynamic then give it an onclick function where when its clicked displays a list of optiions
          <option value="">Africa</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option> */}  
      </div>
      </div>
      <Card />
    </div>
    </>

  )
}

export default Mainsection