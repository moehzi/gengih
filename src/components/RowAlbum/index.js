import React from 'react';
import { ButtonSelect } from './ButtonSelect';
import { SongArtist } from './SongArtist';
import { SongImage } from './SongImage';
import { SongTitle } from './SongTitle';

const RowAlbum = ({ image, title, artist, url }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#E6D5B8',
        borderRadius: '1rem',
      }}
    >
      <SongImage image={image} />
      <div style={{ color: '#1B1A17' }}>
        <SongTitle title={title} />
        <SongArtist artist={artist} />
        <ButtonSelect url={url} />
      </div>
    </div>
  );
};

export default RowAlbum;
