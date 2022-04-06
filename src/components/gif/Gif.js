import React from 'react';

const Gif = ({ url, title }) => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <img
        style={{ borderRadius: '1rem' }}
        width="200"
        height="200"
        src={url}
        alt="foto-aja"
      />
      <p style={{ maxWidth: '200px', margin: '0 auto' }}>{title}</p>
    </div>
  );
};

export default Gif;
