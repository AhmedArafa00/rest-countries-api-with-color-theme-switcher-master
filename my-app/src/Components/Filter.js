import React from 'react'

const Filter = () => {
  return (
    <section className='filter'>
       <form className='form-control'>
        <input type='search' name='search' id='search'
        placeholder='Search for a country'></input>
       </form>
       <div className="region-filter">
          <select
            name="select"
            id="select"
          >
            <option value="Filter by region">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
    </section>
  )
}

export default Filter
