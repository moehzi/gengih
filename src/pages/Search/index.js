import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Gif from '../../components/GIF/Gif';
import Button from '../../components/Button/index';
import Input from '../../components/Input/index';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from '../../store/searchSlice';

const SearchBar = () => {
  const text = useSelector((state) => state.inputVal.value);
  const [giphys, setGiphys] = useState([]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setText(e.target.value));
  };

  const getGiphy = async () => {
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${text}&limit=20`
    );
    return response.data;
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
    getGiphy().then((data) => {
      setGiphys(data.data);
    });
  };

  useEffect(() => {
    getGiphy().then((data) => {
      setGiphys(data.data);
    });
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <Input handleChange={handleChange} />
      <Button handleClick={handleClick} />
      <div style={{ display: 'flex ', flexWrap: 'wrap', gap: '1rem' }}>
        {renderGif()}
      </div>
    </div>
  );
};

export default SearchBar;
