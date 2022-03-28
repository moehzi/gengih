import React from 'react';

export const ButtonSelect = ({ url }) => {
  return (
    <button
      style={{
        padding: '12px 32px',
        borderRadius: '0.5rem',
        fontSize: '16px',
        backgroundColor: '#F0A500',
        outline: 'none',
        cursor: 'pointer',
      }}
    >
      <a
        href={url}
        style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}
      >
        Select
      </a>
    </button>
  );
};
