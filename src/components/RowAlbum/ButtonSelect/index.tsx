import React from 'react';
import { Button } from '@chakra-ui/react';

interface ButtonSelectProps {
  isSelected: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  id: string;
}

export const ButtonSelect = ({
  isSelected,
  onClick,
  id,
}: Partial<ButtonSelectProps>) => {
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
