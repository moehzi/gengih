import React from 'react';
import { Button } from '@chakra-ui/react';

export const ButtonSelect = ({ isSelected, onClick, id }) => {
  return (
    <Button
      colorScheme={isSelected ? 'red' : 'purple'}
      size="sm"
      height="30px"
      width="80px"
      onClick={onClick}
      id={id}
    >
      {isSelected ? 'Deselect' : 'Select'}
    </Button>
  );
};
