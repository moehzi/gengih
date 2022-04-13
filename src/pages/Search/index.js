import React, { useState, useEffect } from 'react';
import SearchBox from '../../components/SearchBox/index';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from '../../store/searchSlice';
import { getGiphy } from '../../services/gifService';
import { CardGIF } from '../../components/CardGIF';
import Navbar from '../../components/Navbar';

const SearchBar = () => {
  const searchQuery = useSelector((state) => state.inputValue.value);

  const [giphys, setGiphys] = useState([]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setText(e.target.value));
  };

  const handleClick = () => {
    getGiphy(searchQuery).then((data) => {
      setGiphys(data.data);
    });
  };

  useEffect(() => {
    getGiphy(searchQuery).then((data) => {
      setGiphys(data.data);
    });
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#060606',
        padding: '1rem',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <SearchBox handleChange={handleChange} handleClick={handleClick} />
      <div style={{ width: '90%', margin: '0 auto' }}>
        <CardGIF giphys={giphys} />
      </div>
    </div>
  );
};

export default SearchBar;
