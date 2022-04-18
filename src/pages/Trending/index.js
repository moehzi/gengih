import React, { useState, useEffect } from 'react';
import { getTrending } from '../../services/gifService';
import { CardGIF } from '../../components/CardGIF';
import Navbar from '../../components/Navbar';
import { Typography } from '@mui/material';

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
    <div
      style={{
        padding: '1rem',
        backgroundColor: '#060606',
        minHeight: '100vh',
      }}
    >
      <Typography sx={{ color: 'white' }} variant="h3">
        On trending now!
      </Typography>
      <div style={{ width: '90%', margin: '0 auto' }}>
        {isLoading ? <h1>Loading ... </h1> : <CardGIF giphys={giphys} />}
      </div>
    </div>
  );
};

export default Trending;
