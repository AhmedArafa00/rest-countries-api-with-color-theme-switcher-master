import React, { useEffect, useState } from 'react'

const Filter = () => {
  const [search, setSearch] = useState('')
  console.log(search)
  return (
    <section className='filter'>
       <form className='form-control'>
       <input type="text"
          placeholder="Search for a country"
          className="input"
          name="input" onChange={e => setSearch(e.target.value)}/>
       </form>
       <div className="region-filter">
       <select>
        <option value="none">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
        </div>
    </section>
  )
}

export default Filter
