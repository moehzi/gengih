import React, { useEffect, useState } from 'react';
import RowAlbum from '../../components/RowAlbum';
import AuthView from '../../components/AuthView';
import {
  addItemToPlaylist,
  createPlaylist,
  getCurrentProfile,
  getSongList,
} from '../../services/spotify';
import FormPlaylist from '../../components/FormPlaylist';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../store/authSlice';
import './style.css';
import { Text } from '@chakra-ui/react';
import { Redirect } from 'react-router';
import { RootState } from '../../store/store';
import { useToast } from '@chakra-ui/react';
import { User } from '../../interfaces/UserData';
import { Track, SelectedTrack } from '../../interfaces/TrackData';

export const CreatePlaylist = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [user, setUser] = useState<User>();
  const [valInput, setValInput] = useState({
    title: '',
    description: '',
    searchInput: '',
  });
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [selectedTracks, setSelectedTracks] = useState<SelectedTrack[]>([]);
  const token = useSelector((state: RootState) => state.token?.value);

  const handleClick = (event: React.MouseEvent, datas: Track[]) => {
    const findIndex = datas.findIndex(
      (track) => track.uri === (event.target as Element).id
    );

    const removeItem = (arr: SelectedTrack[], value: SelectedTrack) => {
      return arr.filter((ele: SelectedTrack) => {
        return ele !== value;
      });
    };

    const removeTemp = removeItem(selectedTracks, tracks[findIndex]);
    setIsUpdated(true);
    return datas[findIndex]['isSelected'] === false
      ? ((datas[findIndex]['isSelected'] = true),
        selectedTracks.push(tracks[findIndex]))
      : ((datas[findIndex]['isSelected'] = false),
        setSelectedTracks([...removeTemp]));
  };

  const handleSubmitPlaylist = (
    e: React.FormEvent<HTMLFormElement>,
    datas: SelectedTrack[],
    user: User
  ) => {
    e.preventDefault();

    const payload = {
      name: valInput.title,
      description: valInput.description,
      public: false,
    };
    createPlaylist(user?.id, token, payload)
      .then((res) => {
        setValInput({ ...valInput, title: ' ', description: ' ' });

        const tempUri = datas.map((track) => track.uri);
        console.log(tempUri.join(','));

        addItemToPlaylist(res.data.id, token, tempUri.join(',')).then(() => {
          toast({
            title: 'Playlist Created',
            description: `We've created your ${valInput.title} playlist for you.`,
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
          setTracks([]);
          setSelectedTracks([]);
          setValInput({
            title: '',
            description: '',
            searchInput: '',
          });
        });
      })
      .catch((error) => {
        const errMessage = error.response.data.error.message;
        toast({
          title: 'Error!',
          description: errMessage,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      });
  };

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(setToken(''));
  };

  const handleClickSelected = (e: React.MouseEvent, datas: SelectedTrack[]) => {
    const findIndex = datas.findIndex(
      (track) => track.uri === (e.target as Element).id
    );

    const removeItem = (arr: SelectedTrack[], value: SelectedTrack) => {
      return arr.filter((ele: SelectedTrack) => {
        return ele !== value;
      });
    };

    datas[findIndex]['isSelected'] = false;
    const removeSelected = removeItem(
      selectedTracks,
      selectedTracks[findIndex]
    );

    setSelectedTracks([...removeSelected]);
  };

  const renderRow = (datas: Track[], selected: SelectedTrack[]) => {
    return datas
      .filter((track) => !selected.some((track2) => track.uri === track2.uri))
      .map((album) => {
        return (
          <RowAlbum
            onClick={(e: React.MouseEvent) => handleClick(e, tracks)}
            isSelected={album.isSelected}
            image={album.album.images[1].url}
            title={album.name}
            artist={album.artists[0].name}
            url={album.artists[0].uri}
            key={album.id}
            id={album.uri}
          />
        );
      });
  };

  const renderSelectedRow = (datas: SelectedTrack[]) => {
    return datas.map((album) => {
      return (
        <RowAlbum
          width="100px"
          height="100px"
          onClick={(e: React.MouseEvent) =>
            handleClickSelected(e, selectedTracks)
          }
          isSelected={album.isSelected}
          image={album.album.images[1].url}
          title={album.name}
          artist={album.artists[0].name}
          url={album.artists[0].uri}
          key={album.id}
          id={album.uri}
        />
      );
    });
  };

  useEffect(() => {
    if (token) {
      getCurrentProfile(token).then((res) => {
        setUser(res);
      });
    }
  }, [token]);

  useEffect(() => {
    renderRow(tracks, selectedTracks);
    setIsUpdated(false);
  }, [isUpdated]);

  const handleSubmit = () => {
    getSongList(token, valInput.searchInput)
      .then((res) => {
        const data = res.tracks.items;

        const newArr = data.map((v: string[]) => {
          return { ...v, isSelected: false };
        });
        setTracks(newArr);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValInput({
      ...valInput,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      style={{
        backgroundColor: '#060606',
        color: 'white',
        minHeight: '100vh',
        padding: '4rem 0',
      }}
    >
      <div
        style={{
          width: '90%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        {token ? (
          <AuthView
            user={user?.display_name}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleLogout={handleLogout}
            searchInput={valInput.searchInput}
          />
        ) : (
          <Redirect to="/" />
        )}
        <div className={selectedTracks.length > 0 ? 'content-wrapper' : ''}>
          {selectedTracks.length > 0 && (
            <div>
              <FormPlaylist
                title={valInput.title}
                description={valInput.description}
                handleChange={handleChange}
                handleSubmitPlaylist={(e: React.FormEvent<HTMLFormElement>) =>
                  handleSubmitPlaylist(e, selectedTracks, user!)
                }
              />
              <Text fontSize="3xl" fontWeight="bold" m="1.5rem 0">
                Selected Tracks
              </Text>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {renderSelectedRow(selectedTracks)}
              </div>
            </div>
          )}

          {tracks.length > 0 && (
            <div>
              <Text fontSize="4xl" fontWeight="bold" mb="1.5rem">
                List of Tracks
              </Text>
              <div className="row">{renderRow(tracks, selectedTracks)}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
