import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Search from '../logo/search.png'
import axios from 'axios'
import Dropdown from '../logo/dropdown.png'
import deleteIcon from '../logo/checked.png'
import check from '../logo/checked (1).png'



const Mainsection = ({children}) => {

  const [countries, setCountries] = useState([]);
  const [open, setOpen] = useState(false);

    useEffect(() => {
        axios.get('https://restcountries.com/v2/all')
      .then((res) => {
          console.log(res.data);
          setCountries(res.data);
      })
      .catch((err) => {
          alert(err.message);
      })
        
    }, []);
  
    
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
      <div className='grid md:grid-cols-4'>

      {countries && countries.map((country,index) => {
        return (
          <div key={index} className='w-[240px] h-[400px] gap-14 my-[60px] mx-6 rounded-[10px] bg-[#F2F2F2] overflow-hidden' >
              <img src = {country.flags.png} alt = 'flags' className='h-40'/>
              <div className='relative left-[20px] top-[20px]'>
                <div>
                  <p className='font-semibold'>{country.name}</p>
                </div>
                <div className='mt-[15px] font-medium tracking-wider text-sm leading-5'>
                  <p className='my-[5px]'>Population:<span>{country.population}</span></p>
                  <p className='my-[5px]'>Capital:<span>{country.capital}</span></p>
                  {country.currencies && country.currencies.map((currency,index) => {
                    return (
                      <p key={index} className='my-[5px]'>Currency:<span>{currency.code}</span></p>
                    )
                  } )}
                </div>
                <div className='flex flex-row absolute top-40 left-28 gap-[20px]'>
                  <img src={deleteIcon} className="pointer-events-auto cursor-default" alt="delete"/>
                  <img src = {check} className ="active:fill-[#14C704]"  alt = "check"/>
                </div>
              </div>
          </div>
        )})}
      </div>
      {children}
      
    </div>
    </>

  )
}

export default Mainsection