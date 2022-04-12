import React from 'react';
import SearchBox from '../SearchBox';
import './style.css';

const AuthView = ({
  handleChange,
  handleSubmit,
  handleLogout,
  user,
  searchInput,
}) => {
  return (
    <div>
      <div className="search-container">
        <h1 style={{ textAlign: 'center', flex: '1' }}>
          Hello {user}, temukan lagu kesukaanmu disini!
        </h1>
        <button className="btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <SearchBox
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchInput={searchInput}
      />
    </div>
  );
};

export default AuthView;
