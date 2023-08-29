import React, {useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-regular-svg-icons'

const Header = () => {
  const [theme, setTheme] = useState("light")

  const switchTheme = () => {
      if(theme === "dark") {
        setTheme("light")
        document.body.classList.remove("dark")
      } else {
          setTheme("dark")
          document.body.classList.remove("light")
      }
  }
  useEffect(() => {
    document.body.classList.add(theme)
  }, [theme])

  return (
        <>
    <header className='header'>
        <div className='container'>
        <h1>Where in the world?</h1>
        <div className='mode' onClick={switchTheme}>
        <FontAwesomeIcon className='fa-moon'icon={faMoon} /> Dark Mood
        </div>
        </div>
        </header> 
        </>
    
  )
}

export default Header
