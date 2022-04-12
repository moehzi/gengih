import React from 'react';
import './style.css';

const SearchBox = ({ handleChange, handleSubmit, searchInput }) => {
  return (
    <div className="search-wrapper">
      <button
        onClick={handleSubmit}
        style={{
          fontSize: '16px',
          backgroundColor: '#252836',
          outline: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
          border: 'none',
          marginRight: '.5rem',
        }}
      >
        <img src="/icons/search.svg" />
      </button>
      <input
        className="input-search"
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        name="searchInput"
        value={searchInput}
        onChange={handleChange}
        placeholder="Masukkan track yang ingin anda cari"
      />
    </div>
  );
};

export default SearchBox;
