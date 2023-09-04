import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Filter from './Filter'

 //const Url = 'https://restcountries.com/v2/all'
 const Url = 'https://restcountries.com/v3.1/all'



const Country = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
 
    useEffect(()=> {
        const fetchCountries = async () => {
            const response = await fetch(Url)
            const countries = await response.json()
            setCountries(countries)
            setIsLoading(false)
        }
        fetchCountries()
    },[])
   
  return (
    <>
    {isLoading ? <h1 className='loading'>Loading....</h1> :
      <section className='grid'>
      {
      countries.map((item) => {
        const {subregion, name, population, region, flags } = item
        return (
            <>
          <article>  
             <Link to={`/${name.common}`}> 
              <div className='image'>
                <img src={flags.svg} alt={name}>
                </img>
                </div>
                <div className='details'>
                <h3>{name.common}</h3>
                <h4>Population: <span>{population}</span></h4>
                <h4>Region: <span>{region}</span></h4>
                <h4>subregion: <span>{subregion}</span></h4>
                </div>
                </Link> 
        </article>
                </>
      )})} 
     </section>
}
    </>    

  )    
}

export default Country
