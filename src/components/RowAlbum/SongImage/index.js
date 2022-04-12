import React from 'react';

export const SongImage = ({ image }) => {
  return (
    <img
      src={image}
      alt=""
      style={{
        marginRight: '1rem',
        borderRadius: '1rem 0 0 1rem',
        width: '180px',
        height: '180px',
      }}
    />
  );
};
