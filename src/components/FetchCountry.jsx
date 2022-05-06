import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';


const FetchCountry = () => {
    
    // const [countries, setCountries] = useState([]);

    // useEffect(() => {
    //     axios.get('https://restcountries.com/v3.1/all')
    //   .then((res) => {
    //       console.log(res.data);
    //       setCountries(res.data);
    //   })
    //   .catch((err) => {
    //       alert(err.message);
    //   })
        
    // }, []);

  return (
    <>
    
        {/* {countries.map((country,id) => (
          <article key={id}>
              <h1>{country.name.official}</h1>
              <li>{country.capital}</li>
              <li>{country.region}</li>
              <li>{country.population}</li>
              <li>{country.area}</li>
              <img src={country.flags.png} alt = 'flags' />
          </article>
        ))} */}
    </>
  )
}

export default FetchCountry