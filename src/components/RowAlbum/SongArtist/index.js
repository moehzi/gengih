import React from 'react';

export const SongArtist = ({ artist }) => {
  return (
    <h2
      style={{
        fontSize: '10px',
        opacity: '50%',
      }}
    >
      {artist}
    </h2>
  );
};
