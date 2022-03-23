import React from 'react';

const GIFImage = ({ image, title }) => {
  return (
    <div>
      <p>{title}</p>
      <img src={image} alt="foto-aja" />
    </div>
  );
};

export default GIFImage;
