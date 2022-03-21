import React from 'react';
import data from '../../data/data.json';

export const HomeworkTwo = () => {
  const songTitle = data.album.name;
  const songArtist = data.album.artists[0].name;
  const imagesSrc = [];

  //   Get images
  const images = data.album.images;
  images.forEach((image) => imagesSrc.push(image));

  return (
    <div style={{ height: '100vh' }}>
      {imagesSrc.map((image) => {
        return <img src={image.url} alt="" style={{ padding: '12px' }} />;
      })}
      <div>
        <h1 style={{ fontSize: '48px' }}>{songTitle}</h1>
        <h2>{songArtist}</h2>
        <button
          style={{
            padding: '12px 32px',
            borderRadius: '4px',
            fontSize: '16px',
            backgroundColor: '#3DB7E4',
            color: 'white',
          }}
        >
          Select
        </button>
      </div>
    </div>
  );
};
