import React from 'react';
import { ButtonSelect } from './ButtonSelect';
import { SongArtist } from './SongArtist';
import { SongImage } from './SongImage';
import { SongTitle } from './SongTitle';

const RowAlbum = ({ image, title, artist, url, onClick, isSelected, id }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#252836',
        borderRadius: '.75rem',
      }}
    >
      <SongImage image={image} />
      <div
        style={{
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          gap: '.5rem',
          alignItems: 'start',
        }}
      >
        <SongTitle title={title} />
        <SongArtist artist={artist} />
        <ButtonSelect
          url={url}
          onClick={onClick}
          isSelected={isSelected}
          id={id}
        />
      </div>
    </div>
  );
};

export default RowAlbum;
