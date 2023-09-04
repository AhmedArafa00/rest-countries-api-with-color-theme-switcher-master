import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

export default function SingleCountry() {
  const [country, setCountry] = useState([ ]);
  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };

    getSingleCountry();
  }, [name]);

  useEffect(() => {
    document.title = `Countries | ${name}`;
  }, [name]);

  return (
    <>
    <Link
                to="/"
                className="back"
              >
                <div className="icon">
              <FontAwesomeIcon icon={faArrowLeft} />
              <h2>Back</h2>
              </div>
              </Link>
      <section className="country">
        {country.map((item) => (
          <div
            key={item.population}
            className="country-inner"
          >
            <article className="flag">
              <img src={item.flags.svg} alt={item.name.common} />
            </article>

            <article className="country-details">
              <h1 className="">
                {item.name.official}
              </h1>
              <ul className="list">
                <li><span>Capital:</span> {item.capital[0]}</li>
                <li><span>Population:</span> {item.population.toLocaleString()}</li>
                <li><span>Region:</span> {item.region}</li>
                <li><span>Subregion:</span> {item.subregion}</li>
                <li><span>Capital:</span>  {item.capital}</li>
              </ul>
              {item.borders && (
                <>
                <article className="borders">
                  <h3 className="">
                    Borders:
                  </h3>
                  <ul className="">
                    {item.borders.map((border, index) => (
                      <li
                      key={index}
                      className=""
                      >
                        {border}
                      </li>
                    ))}
                  </ul>
                  </article>
                </>
              )}
            </article>
            </div>
        ))}
      </section>
    </>
  );
}