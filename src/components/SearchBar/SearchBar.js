import React, { useEffect, useState } from 'react';
import searchIcon from '../../images/search-icon.svg';
import './SearchBar.css';

function SearchBar({ searchChanged, loading }) {
  const [searchString, setSearchString] = useState('')
  useEffect(() => {
    const debounceTime = setTimeout(() => {
      searchChanged(searchString)
    }, 500)
    return () => clearTimeout(debounceTime);
  }, [searchString])

  return (
    <div className="input-wrapper">
      <img src={searchIcon} alt='search icon' />
      <input type='text' placeholder='Search Input' value={searchString} onChange={(e) => setSearchString(e.target.value)} />
      {loading && <span className="loader"></span>}
    </div>
  )
}

export default SearchBar