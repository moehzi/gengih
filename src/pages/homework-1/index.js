/* eslint-disable no-undef */
import RowAlbum from '../../components/RowAlbum';
import axios from 'axios';
import { useState } from 'react';
import NotAuthView from '../../components/NotAuth';
import AuthView from '../../components/AuthView';

export const HomeworkOne = () => {
  const [valInput, setValInput] = useState('');
  const [tracks, setTracks] = useState([]);

  const access_token = new URLSearchParams(window.location.hash).get(
    '#access_token'
  );

  const renderRow = () => {
    return tracks.map((album) => {
      console.log('inialbum', album);
      return (
        <RowAlbum
          image={album.album.images[1].url}
          title={album.name}
          artist={album.artists[0].name}
          url={album.artists[0].uri}
          key={album.id}
        />
      );
    });
  };

  const [token, setToken] = useState('');

  if (access_token) {
    if (!token) {
      setToken(access_token);
    }
  }

  const getSongList = async () => {
    await axios
      .get(
        `https://api.spotify.com/v1/search?q=${valInput}&limit=20&type=track`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => setTracks(res.data.tracks.items))
      .catch((error) => console.log(error));
  };

  const handleSubmit = () => {
    getSongList();
  };

  const handleChange = (e) => {
    setValInput(e.target.value);
  };

  return (
    <div>
      <div
        style={{
          padding: '0 4rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        {token ? (
          <AuthView handleChange={handleChange} handleSubmit={handleSubmit} />
        ) : (
          <NotAuthView />
        )}
        {renderRow()}
      </div>
    </div>
  );
};
