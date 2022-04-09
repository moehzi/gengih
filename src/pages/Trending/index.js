import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from '../../services/gifService';
import { CardGIF } from '../../components/CardGIF';

const Trending = () => {
  const [giphys, setGiphys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTrending().then((data) => {
      setGiphys(data.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <Link to="/">back to search page</Link>
      <h1>On trending now!</h1>
      <div style={{ width: '90%', margin: '0 auto' }}>
        {isLoading ? <h1>Loading ... </h1> : <CardGIF giphys={giphys} />}
      </div>
    </div>
  );
};

export default Trending;
