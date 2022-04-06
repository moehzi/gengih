import React from 'react';
import SearchBox from '../SearchBox';

const AuthView = ({ handleChange, handleSubmit, handleLogout, user }) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <h1 style={{ textAlign: 'center', flex: '1' }}>
          Hello {user}, temukan lagu kesukaanmu disini!
        </h1>
        <button
          style={{
            padding: '0.5rem 2rem',
            fontSize: '1rem',
            backgroundColor: '#F0A500',
            outline: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <SearchBox handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default AuthView;
