import React, { useState, useEffect } from 'react'
import deleteIcon from '../logo/checked.png'
import check from '../logo/checked (1).png'
import axios from 'axios'

export default function Card () {

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
                    <img src = {check} alt = "check" className='pointer-events-auto cursor-default hover:bg-[url("public/checked (2).png")]' />
                  </div>
                </div>
            </div>
          )})}
        </div>
        
        )
}