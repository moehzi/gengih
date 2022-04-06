import React, { useState, useEffect } from 'react';
import Gif from '../../components/gif/Gif';
import Button from '../../components/Button/index';
import Input from '../../components/Input/index';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from '../../store/searchSlice';
import { Link } from 'react-router-dom';
import { getGiphy } from '../../services/gifService';

const SearchBar = () => {
  const text = useSelector((state) => state.inputVal.value);
  const [giphys, setGiphys] = useState([]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setText(e.target.value));
  };

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

  const handleClick = () => {
    getGiphy(text).then((data) => {
      setGiphys(data.data);
    });
  };

  useEffect(() => {
    getGiphy(text).then((data) => {
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
        <h3>See what's trending now</h3>
      </Link>
      <Input handleChange={handleChange} />
      <Button handleClick={handleClick} />
      <div style={{ width: '90%', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex ',
            flexWrap: 'wrap',
            gap: '2rem',
            textAlign: 'center',
          }}
        >
          {renderGif()}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
