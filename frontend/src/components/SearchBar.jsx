import React, { useState } from 'react';
import '../style/searchBar.css';
function SearchBar({updateSearchTerm}) {
    const [term, setSearchTerm] = useState('');
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search..."
        className="input"
        onChange={(e)=> updateSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
