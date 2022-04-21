import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { RootState } from '../../store/store';
import { getMyPlaylist } from '../../services/spotify';
import { CardPlaylist } from '../../components/CardPlaylist';
import { Playlist } from '../../interfaces/PlaylistData';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

export const YourPlaylist = () => {
  const token = useSelector((state: RootState) => state.token?.value);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    getMyPlaylist(token).then((res) => {
      setPlaylist(res.items);
      console.log(res.items);
    });
  }, [token]);

  const renderCardPlaylist = (datas: Playlist[]) => {
    return datas.map((item) => {
      return (
        <Link to={`/playlist/${item.id}`} key={item.uri}>
          <CardPlaylist
            name={item.name}
            description={item.description}
            image={item.images[0]?.url}
            key={item.uri}
          />
        </Link>
      );
    });
  };

  return (
    <div
      style={{
        color: 'white',
      }}
    >
      {token ? (
        <div
          style={{
            marginTop: '2rem',
            width: '90%',
            margin: '0 auto',
          }}
        >
          <h1
            style={{
              fontSize: '2rem',
              marginBottom: '2rem',
              fontWeight: '600',
            }}
          >
            List of your playlists
          </h1>
          <Box
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
            justifyContent={'center'}
          >
            {renderCardPlaylist(playlist)}
          </Box>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};
