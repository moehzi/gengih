import React from 'react';

const Gif = ({ url, title }) => {
  return (
    <div style={{ maxWidth: '250px' }}>
      <p>{title}</p>
      <img width="200" height="200" src={url} alt="foto-aja" />
    </div>
  );
};

export default Gif;
