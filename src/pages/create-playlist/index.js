import { useEffect, useState } from 'react';
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
import { Redirect } from 'react-router-dom';
import { errorToast, successToast } from '../../helper/toast';
import './style.css';
import { Text, useToast } from '@chakra-ui/react';

export const CreatePlaylist = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const [valInput, setValInput] = useState({
    title: '',
    description: '',
    searchInput: '',
  });
  const [tracks, setTracks] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const token = useSelector((state) => state.token?.value);

  const handleClick = (e) => {
    const findIndex = tracks.findIndex((track) => track.uri === e.target.id);

    const removeItem = (arr, value) => {
      return arr.filter((ele) => {
        return ele !== value;
      });
    };

    const removeTemp = removeItem(selectedTracks, tracks[findIndex]);
    tracks[findIndex].isSelected === false
      ? ((tracks[findIndex].isSelected = true),
        selectedTracks.push(tracks[findIndex]))
      : ((tracks[findIndex].isSelected = false),
        setSelectedTracks([...removeTemp]));

    setIsUpdated(true);
  };

  const handleSubmitPlaylist = (e) => {
    e.preventDefault();

    const payload = {
      name: valInput.title,
      description: valInput.description,
      public: false,
    };

    createPlaylist(user.id, token, payload)
      .then((res) => {
        setValInput({ ...valInput, title: ' ', description: ' ' });

        const tempUri = selectedTracks.map((track) => track.uri);

        addItemToPlaylist(res.data.id, token, tempUri.join(',')).then(() => {
          successToast(
            'Playlist Created',
            `We've created your ${valInput.title} playlist for you.`,
            toast
          );
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
        errorToast('Error!', errMessage, toast);
      });
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(setToken(''));
  };

  const handleClickSelected = (e) => {
    const findIndex = selectedTracks.findIndex(
      (track) => track.uri === e.target.id
    );

    const removeItem = (arr, value) => {
      return arr.filter((ele) => {
        return ele !== value;
      });
    };

    selectedTracks[findIndex].isSelected = false;
    const removeSelected = removeItem(
      selectedTracks,
      selectedTracks[findIndex]
    );

    setSelectedTracks([...removeSelected]);
  };

  const renderRow = () => {
    return tracks
      .filter(
        (track) => !selectedTracks.some((track2) => track.uri === track2.uri)
      )
      .map((album) => {
        return (
          <RowAlbum
            onClick={handleClick}
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

  const renderSelectedRow = () => {
    return selectedTracks.map((album) => {
      return (
        <RowAlbum
          width="100px"
          height="100px"
          onClick={handleClickSelected}
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
  }, []);

  useEffect(() => {
    renderRow();
    setIsUpdated(false);
  }, [isUpdated]);

  const handleSubmit = () => {
    getSongList(token, valInput.searchInput)
      .then((res) => {
        const data = res.tracks.items;

        const newArr = data.map((v) => {
          return { ...v, isSelected: false };
        });
        setTracks(newArr);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValInput({
      ...valInput,
      [name]: value,
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
            user={user.display_name}
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
                handleSubmitPlaylist={handleSubmitPlaylist}
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
                {renderSelectedRow()}
              </div>
            </div>
          )}

          {tracks.length > 0 && (
            <div>
              <Text fontSize="4xl" fontWeight="bold" mb="1.5rem">
                List of Tracks
              </Text>
              <div className="row">{renderRow()}</div>
            </div>
          )}
        </div>
        {/* <Toast /> */}
      </div>
    </div>
  );
};
