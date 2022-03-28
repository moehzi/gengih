import React from 'react';

const Gif = ({ url, title }) => {
  return (
    <div>
      <p>{title}</p>
      <img src={url} alt="foto-aja" />
    </div>
  );
};

export default Gif;
