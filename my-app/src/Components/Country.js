import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Url = 'https://restcountries.com/v2/all'
const Country = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=> {
        const fetchCountries = async () => {
            const response = await fetch(Url)
            const countries = await response.json()
            setCountries(countries)
        }
        fetchCountries()
    },[])
    const removeCountry = (numericCode) => {
      const newCountry = countries.filter((b)=> b.numericCode !==
       numericCode
       )
      setCountries(newCountry)
    }
  return (
    <>
     <section className='grid'>
     {
      countries.map((c) => {
        const {numericCode, name, population, region, capital, flag } = c
        return <article key={numericCode}>
            {/* <div> */}
                <img src={flag} alt={name}></img>
                <div className='details'>
                <h3>{name}</h3>
                <h4>Population: <span>{population}</span></h4>
                <h4>Region: <span>{region}</span></h4>
                <h4>Capital: <span>{capital}</span></h4>
               <div className='buttons'>
               <Link className='btn' to={`/countryTwo/${name}`}>Learn more</Link>
               <button className='btn' onClick={() => removeCountry(numericCode)}>Remove Country</button>
               </div>
                </div>
            {/* </div> */}
        </article>
      })} 
     </section>
    </>
  )        
    
}

export default Country
