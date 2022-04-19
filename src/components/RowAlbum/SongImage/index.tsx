import { title } from 'process';
import React from 'react';

interface SongImageProps {
  image: string;
  width?: string;
  height?: string;
  title: string;
}

export const SongImage = ({
  image,
  width,
  height,
  title,
}: Partial<SongImageProps>) => {
  return (
    <img
      src={image}
      alt={title}
      style={{
        marginRight: '1rem',
        borderRadius: '1rem 0 0 1rem',
        width: width || '180px',
        height: height || '180px',
      }}
    />
  );
};
