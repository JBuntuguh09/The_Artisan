import React from "react"
import './index.scss'

export const SearchBox = ({placeholder, handleChange, users}) => {
    console.log(users)
    return(
        <input
          className="search"
          type="search"
          placeholder={placeholder}
          onChange={handleChange()}
        />
    );
}