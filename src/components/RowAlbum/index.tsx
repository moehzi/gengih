import { TimeIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { convertMsToHM } from '../../utils/convertMiliseconds';
import { ButtonSelect } from './ButtonSelect';
import { SongArtist } from './SongArtist';
import { SongImage } from './SongImage';
import { SongTitle } from './SongTitle';

interface RowAlbumProps {
  title: string;
  artist: string;
  image: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string;
  height?: string;
  isSelected: boolean;
  id: string;
  duration: number;
}

const RowAlbum = ({
  image,
  title,
  artist,
  onClick,
  isSelected,
  id,
  width,
  height,
  duration,
}: Partial<RowAlbumProps>) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#252836',
        borderRadius: '.75rem',
      }}
    >
      <SongImage image={image} width={width} height={height} title={title} />
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
        <Flex
          gap=".25rem"
          alignItems={'center'}
          opacity="70%"
          fontSize={'.75rem'}
        >
          <TimeIcon boxSize={3} /> {convertMsToHM(duration!)}
        </Flex>
        <ButtonSelect onClick={onClick} isSelected={isSelected} id={id} />
      </div>
    </div>
  );
};

export default RowAlbum;
