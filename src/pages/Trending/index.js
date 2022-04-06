import React, { useState, useEffect } from 'react';
import Gif from '../../components/gif/Gif';
import { Link } from 'react-router-dom';
import { getTrending } from '../../services/gifService';

const Trending = () => {
  const [giphys, setGiphys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTrending().then((data) => {
      setGiphys(data.data);
      setIsLoading(false);
    });
  }, []);

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

  return (
    <div style={{ padding: '1rem' }}>
      <Link to="/">back to search page</Link>
      <h1>On trending now!</h1>
      <div style={{ width: '90%', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex ',
            flexWrap: 'wrap',
            gap: '2rem',
            textAlign: 'center',
          }}
        >
          {isLoading ? <h1>Loading ...</h1> : renderGif()}
        </div>
      </div>
    </div>
  );
};

export default Trending;
