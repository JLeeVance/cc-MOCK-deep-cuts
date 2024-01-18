import React from 'react'

function Search({
  onSearchChange,
  searchText
}) {
  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          value={searchText}
          onChange={onSearchChange}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search