import React from 'react'
import lens from '../../Assets/lens.png'
import './Search.css'
const Search = () => {
  return (
    <div className='searchInput'>
      <img src={lens} alt="lens"/>
      <input type="text" placeholder='Search for your favorite groups in ATG' ></input>
    </div>
  )
}

export default Search
