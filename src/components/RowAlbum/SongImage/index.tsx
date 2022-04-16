import React from 'react';

interface SongImageProps {
  image: string;
  width?: string;
  height?: string;
}

export const SongImage = ({
  image,
  width,
  height,
}: Partial<SongImageProps>) => {
  return (
    <img
      src={image}
      alt=""
      style={{
        marginRight: '1rem',
        borderRadius: '1rem 0 0 1rem',
        width: width || '180px',
        height: height || '180px',
      }}
    />
  );
};
