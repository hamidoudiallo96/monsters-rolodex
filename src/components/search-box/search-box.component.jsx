import React from 'react'
import './search-box.css'

export const SearchBox = props =>{
    const {handleChange,placeholder} = props
    return (
        <div>
           <input
            className = "search"
            type = "search"
            placeholder = {placeholder}
            onChange = {handleChange}
            />
        </div>
    )
}
