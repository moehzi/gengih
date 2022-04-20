import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Center,
  HStack,
  Text,
  IconButton,
  Fade,
} from '@chakra-ui/react';
import { TriangleDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../store/authSlice';
import { setUser } from '../../store/userSlice';
import { RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import { getCurrentProfile } from '../../services/spotify';

export default function Nav() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector((state: RootState) => state.token?.value);
  const user = useSelector((state: RootState) => state.user?.value);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(setToken(''));
  };

  useEffect(() => {
    if (token) {
      getCurrentProfile(token).then((res) => {
        dispatch(setUser(res));
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <Box bg={'#060606'} width="90%" margin="0 auto" mb="4rem">
      {!isLoading && (
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontSize={'2rem'} fontWeight={'bold'} color="white">
            Mozaic
          </Box>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              fontSize="1.35rem"
              color="white"
            >
              <NavLink
                style={(isActive) => ({
                  opacity: isActive ? '100%' : '70%',
                })}
                to="/create-playlist"
              >
                Create Playlist
              </NavLink>
              <NavLink
                to="/your-playlist"
                style={(isActive) => ({
                  opacity: isActive ? '100%' : '70%',
                })}
              >
                Your Playlist
              </NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Box>
                <Menu>
                  <MenuButton
                    style={{ margin: 0 }}
                    backgroundColor={'#252836'}
                    as={Button}
                    padding={'.35rem .5rem'}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}
                  >
                    <Flex alignItems={'center'} gap={'.5rem'}>
                      <Avatar size={'sm'} src={user?.images[0]?.url} />
                      <Text color={'white'}>{user?.display_name}</Text>
                      <TriangleDownIcon color={'white'} w={4} h={5} />
                    </Flex>
                  </MenuButton>
                  <MenuList
                    alignItems={'center'}
                    backgroundColor={'#252836'}
                    style={{ margin: 0, color: 'white' }}
                  >
                    <br />
                    <Center>
                      <Avatar size={'2xl'} src={user?.images[0]?.url} />
                    </Center>
                    <br />
                    <Center>
                      <p>{user?.display_name}</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem
                      _hover={{
                        background: '#060606',
                      }}
                      _focus={{
                        background: '#060606',
                      }}
                    >
                      Your Servers
                    </MenuItem>
                    <MenuItem
                      _hover={{
                        background: '#060606',
                      }}
                    >
                      Account Settings
                    </MenuItem>
                    <MenuItem
                      _hover={{
                        background: '#060606',
                      }}
                      onClick={handleLogout}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Stack>
          </Flex>
        </Flex>
      )}
    </Box>
  );
}
