import React from 'react';
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from '@chakra-ui/react';

interface CardPlaylistProps {
  image: string;
  name: string;
  description: string;
}

export const CardPlaylist = ({
  image,
  name,
  description,
}: CardPlaylistProps) => {
  return (
    <Box
      backgroundColor=" #15161e"
      maxW="250px"
      rounded="lg"
      shadow="lg"
      p="4"
      cursor="pointer"
      _hover={{ backgroundColor: '#292d3d' }}
    >
      <Image src={image} alt={`Picture of ${name}`} rounded="lg" />

      <Box>
        <Flex
          mt="1"
          justifyContent="space-between"
          direction="column"
          alignContent="center"
        >
          <Box
            fontSize="xl"
            fontWeight="bold"
            as="h4"
            lineHeight="tight"
            isTruncated
            mt=".25rem"
          >
            {name}
          </Box>
          <Box
            fontSize="md"
            as="h5"
            lineHeight="tight"
            isTruncated
            opacity="70%"
          >
            {description}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
