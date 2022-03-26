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
        backgroundColor: '#DFDFDE',
      }}
    >
      <SongImage image={image} />
      <div>
        <SongTitle title={title} />
        <SongArtist artist={artist} />
        <ButtonSelect url={url} />
      </div>
    </div>
  );
};

export default RowAlbum;
