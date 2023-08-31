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
  return (
    <>
     <section className='grid'>
     {
      countries.map((c) => {
        const {numericCode, name, population, region, capital, flag } = c
        return <article key={numericCode}>
            <Link to={`/countryTwo/${name}`}>
              <div className='image'>
                <img src={flag} alt={name}>
                </img>
                </div>
                <div className='details'>
                <h3>{name}</h3>
                <h4>Population: <span>{population}</span></h4>
                <h4>Region: <span>{region}</span></h4>
                <h4>Capital: <span>{capital}</span></h4>
             
                </div>
                </Link>
        </article>
      })} 
     </section>
    </>
  )        
    
}

export default Country
