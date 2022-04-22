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
  Center,
  Stack,
  HStack,
  Text,
} from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../store/authSlice';
import { setUser } from '../../store/userSlice';
import { RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import { getCurrentProfile } from '../../services/spotify';
import { Link, useHistory } from 'react-router-dom';

export default function Nav() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector((state: RootState) => state.token?.value);
  const user = useSelector((state: RootState) => state.user?.value);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    window.localStorage.clear();
    dispatch(setToken(''));
  };

  useEffect(() => {
    if (token) {
      getCurrentProfile(token)
        .then((res) => {
          dispatch(setUser(res));
          setIsLoading(false);
        })
        .catch((err) => {
          history.push('/');
          console.log(err.message);
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
                to="/your-playlist/"
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
                    <Link to="/create-playlist">
                      <MenuItem
                        display={{ md: 'none' }}
                        _hover={{
                          background: '#060606',
                        }}
                        _focus={{
                          background: '#060606',
                        }}
                      >
                        Create Playlist
                      </MenuItem>
                    </Link>
                    <Link to="/your-playlist">
                      <MenuItem
                        display={{ md: 'none' }}
                        _hover={{
                          background: '#060606',
                        }}
                      >
                        Your Playlist
                      </MenuItem>
                    </Link>

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
