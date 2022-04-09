import React from 'react';
import Gif from '../gif/Gif';
import './style.css';

export const CardGIF = ({ giphys }) => {
  const renderGif = () => {
    return giphys.map((giphy, index) => {
      return (
        <Gif
          title={giphy.title}
          url={giphy.images.fixed_width.url}
          key={index}
        />
      );
    });
  };

  return <div className="card">{renderGif()}</div>;
};
