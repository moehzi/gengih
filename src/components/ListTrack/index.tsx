import React from 'react';
import { Tr, Td, Box } from '@chakra-ui/react';
import { convertMsToHM } from '../../utils/convertMiliseconds';

interface ListTrackProps {
  title: string;
  number: number;
  image: string;
  artist: string;
  album?: string;
  date: string;
  duration: number;
  id: string;
  handleDelete: React.MouseEventHandler;
}

export const ListTrack = ({
  number,
  title,
  image,
  artist,
  album,
  date,
  duration,
}: Partial<ListTrackProps>) => {
  return (
    <Tr>
      <Td style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <h5 style={{ fontSize: '1.25rem' }}>{number}</h5>
        <div style={{ display: 'flex' }}>
          <div>
            <img src={image} alt={title} width={50} height={50} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '1.25rem',
            }}
          >
            <Box
              maxW="250px"
              isTruncated
              fontSize="md"
              fontWeight="bold"
              as="h4"
              lineHeight="tight"
            >
              {title}
            </Box>
            <Box
              maxW="250px"
              isTruncated
              fontSize="sm"
              as="h4"
              lineHeight="tight"
              opacity="70%"
            >
              {artist}
            </Box>
          </div>
        </div>
      </Td>
      <Td>
        <Box
          maxW="350px"
          isTruncated
          fontSize="md"
          as="h4"
          lineHeight="tight"
          opacity="70%"
        >
          {album}
        </Box>
      </Td>
      <Td opacity={'70%'}>{date}</Td>
      <Td opacity={'70%'}>{convertMsToHM(duration!)}</Td>
    </Tr>
  );
};
