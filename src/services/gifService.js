import axios from 'axios';

export const getGiphy = async (text) => {
  const response = await axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${text}&limit=20`
  );
  return response.data;
};

export const getTrending = async () => {
  const response = await axios.get(
    `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=20`
  );
  return response.data;
};
