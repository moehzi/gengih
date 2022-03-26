import React from 'react';

export const ButtonSelect = ({ url }) => {
  return (
    <button
      style={{
        padding: '12px 32px',
        borderRadius: '4px',
        fontSize: '16px',
        backgroundColor: '#3DB7E4',
      }}
    >
      <a href={url} style={{ color: 'white', textDecoration: 'none' }}>
        Select
      </a>
    </button>
  );
};
