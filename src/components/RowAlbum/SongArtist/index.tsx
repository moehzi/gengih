import React from 'react';
import { Text } from '@chakra-ui/react';

interface SongArtistProps {
  artist: string;
}
export const SongArtist = ({ artist }: Partial<SongArtistProps>) => {
  return (
    <Text fontSize="xs" opacity="50%">
      {artist}
    </Text>
  );
};
