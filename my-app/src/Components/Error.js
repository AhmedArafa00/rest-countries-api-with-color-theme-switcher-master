import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
function Error() {
  return (
    <div className="not-found">
      <h1 className='error'>Page Not Found :</h1>
             <Link to="/" className=" back">
    <FontAwesomeIcon className='' icon={faArrowLeft}/>
    <h2> Back</h2>
    </Link>
    </div>
  )
}

export default Error
