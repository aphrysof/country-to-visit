import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Search from '../logo/search.png'
import Dropdown from '../logo/dropdown.png'
import axios from 'axios';

const Mainsection = () => {

  const [countries, setCountries] = useState([]);

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
       <button className = 'w-[200px] h-[50px] bg-[#F2F2F2] inline-flex items-center justify-between pl-3 rounded-[10px]'>Filter by Region<img src = {Dropdown} alt= 'dropdown' /></button>
          {/* <option value="" selected >Filter by Region</option>
          <option value="">Africa</option>
          <option value="">America</option>
          <option value="">Asia</option>
          <option value="">Europe</option>
          <option value="">Oceania</option> */}
       
      </div>
      </div>
      <div className='grid md:grid-cols-4'>

      {countries && countries.map((country,index) => {
        return (
          <div key={index} className='w-[240px] h-[400px] gap-14 my-[60px] mx-6 rounded-[10px] bg-[#F2F2F2] overflow-hidden' >
              <img src = {country.flags.png} alt = 'flags' className='h-40'/>
              <div className=''>
                <div>
                  <p>{country.name}</p>
                </div>
                <div>
                  <p>Population:<span>{country.population}</span></p>
                  <p>Capital:<span>{country.capital}</span></p>
                  {country.currencies && country.currencies.map((currency,index) => {
                    return (
                      <p key={index}>Currency:<span>{currency.code}</span></p>
                    )
                  } )}
                </div>
              </div>
          </div>
        )})}
      </div>
      
    </div>
    </>

  )
}

export default Mainsection