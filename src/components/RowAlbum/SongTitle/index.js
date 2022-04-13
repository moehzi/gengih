import React from 'react';
import { Text } from '@chakra-ui/react';

export const SongTitle = ({ title }) => {
  return (
    <Text fontSize="lg" fontWeight="500">
      {title}
    </Text>
  );
};
