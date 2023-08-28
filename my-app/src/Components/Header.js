import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-regular-svg-icons'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div>
        <h1>Where in the world?</h1>
        </div>
        <div>
        <FontAwesomeIcon icon={faMoon} /> Dark Mood
        </div>
        </header> 
    </>
  )
}

export default Header
