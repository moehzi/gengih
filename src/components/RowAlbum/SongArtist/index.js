import React from 'react';
import { Text } from '@chakra-ui/react';

export const SongArtist = ({ artist }) => {
  return (
    <Text fontSize="xs" opacity="50%">
      {artist}
    </Text>
  );
};
