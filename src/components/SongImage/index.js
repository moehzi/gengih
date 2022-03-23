import React from 'react';

export const SongImage = ({ images }) => {
  const imagesSrc = [];
  images.forEach((image) => imagesSrc.push(image));

  return (
    <>
      {imagesSrc.map((image) => {
        return <img src={image.url} alt="" style={{ padding: '12px' }} />;
      })}
    </>
  );
};
