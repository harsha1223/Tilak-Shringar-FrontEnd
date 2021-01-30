import React from 'react'
import './Search.css'
import { FiSearch} from "react-icons/fi";


function Search() {
    return (
        <div className='searchButton'>
            <input type='text' placeholder='Search ornament, dresses, handicrafts, etc...'></input><FiSearch id='searchIcon'/>
        </div>
    )
}

export default Search
