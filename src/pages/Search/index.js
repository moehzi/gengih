import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/index';
import Input from '../../components/Input/index';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from '../../store/searchSlice';
import { Link } from 'react-router-dom';
import { getGiphy } from '../../services/gifService';
import { CardGIF } from '../../components/CardGIF';

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
        padding: '1rem',
      }}
    >
      <Link to="/trending">
        <h3>See what is trending now</h3>
      </Link>
      <Input handleChange={handleChange} />
      <Button handleClick={handleClick} />
      <div style={{ width: '90%', margin: '0 auto' }}>
        <CardGIF giphys={giphys} />
      </div>
    </div>
  );
};

export default SearchBar;
