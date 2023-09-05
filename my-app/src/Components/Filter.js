import React, { useEffect, useState } from 'react'
import Country from './Country';
const Filter = ({countries, setCountries}) => {
  const [searchText, setSearchText] = useState("");
  const regions = [
    {
      name: "Europe",
    },
    {
      name: "Asia",
    },
    {
      name: "Africa",
    },
    {
      name: "Oceania",
    },
    {
      name: "Americas",
    },
    {
      name: "Antarctic",
    },
  ];
async function filterByRegion(region) {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    const data = await res.json();
    setCountries(data);
  } catch (error) {
    console.error(error);
  }
}
async function searchCountry() {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${searchText}`
    );
    const data = await res.json();
    setCountries(data);
  } catch (error) {
    console.error(error);
  }
}
function handleSearchCountry(e) {
  e.preventDefault();
  searchCountry();
}
function handleFilterByRegion(e) {
  e.preventDefault();
  filterByRegion();
}

  return (
    <section className='filter'>
        <form
              onSubmit={handleSearchCountry}
              autoComplete="off"
              className="form-control"
            >
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for a country"
                required
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className=""
              />
            </form>
        <form onSubmit={handleFilterByRegion} className='region-filter'>
              <select
                name="filter-by-region"
                id="filter-by-region"
                className=""
                value={regions.name}
                onChange={(e) => filterByRegion(e.target.value)}
              >
                {regions.map((region, index) => (
                  <option key={index} value={region.name}>
                    {region.name}
                  </option>
                ))}
              </select>
            </form>
    </section>
  )
}

export default Filter
