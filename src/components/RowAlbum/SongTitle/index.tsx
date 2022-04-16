import React from 'react';
import { Text } from '@chakra-ui/react';

interface SongTitleProps {
  title: string;
}

export const SongTitle = ({ title }: Partial<SongTitleProps>) => {
  return (
    <Text fontSize="lg" fontWeight="500">
      {title}
    </Text>
  );
};
