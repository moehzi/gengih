/* eslint-disable no-undef */
import RowAlbum from '../../components/RowAlbum';
import axios from 'axios';
import { useEffect, useState } from 'react';
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

export const CreatePlaylist = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const [valInput, setValInput] = useState({
    title: '',
    description: '',
    searchInput: '',
  });
  const [tracks, setTracks] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [tempArr, setTempArr] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const token = useSelector((state) => state.token?.value);

  const handleClick = (e) => {
    const findIndex = tracks.findIndex((track) => track.uri === e.target.id);

    const removeItem = (arr, value) => {
      return arr.filter((ele) => {
        return ele !== value;
      });
    };
    const removeTemp = removeItem(tempArr, tracks[findIndex]);
    // eslint-disable-next-line no-unused-expressions
    tracks[findIndex].isSelected === false
      ? ((tracks[findIndex].isSelected = true), tempArr.push(tracks[findIndex]))
      : ((tracks[findIndex].isSelected = false), setTempArr([...removeTemp]));

    setIsUpdated(true);
  };

  const handleSubmitPlaylist = (e) => {
    e.preventDefault();
    const payload = {
      name: valInput.title,
      description: valInput.description,
      public: false,
    };

    createPlaylist(user.id, token, payload).then((res) => {
      console.log(res.data.id);
      setValInput({ ...valInput, title: ' ', description: ' ' });
      const tempUri = tempArr.map((track) => track.uri);
      addItemToPlaylist(res.data.id, token, tempUri.join(',')).then((res) => {
        setTracks([]);
        setSelectedTracks([]);
        setTempArr([]);
      });
    });
  };

  const handleLogout = (e) => {
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
    const removeTemp = removeItem(tempArr, selectedTracks[findIndex]);
    setSelectedTracks([...removeSelected]);
    setTempArr([...removeTemp]);
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
    return selectedTracks.map((album, index) => {
      return (
        <RowAlbum
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
        console.log(res);
      });
    }
  }, []);

  useEffect(() => {
    renderRow();
    setIsUpdated(false);
  }, [isUpdated]);

  const handleSubmit = () => {
    setSelectedTracks([...new Set(tempArr)]);
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
    <div>
      <div
        style={{
          padding: '0 4rem',
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
          />
        ) : (
          <Redirect to="/" />
        )}
        {(tempArr.length > 0 || selectedTracks.length > 0) && (
          <>
            <FormPlaylist
              title={valInput.title}
              description={valInput.description}
              handleChange={handleChange}
              handleSubmitPlaylist={handleSubmitPlaylist}
            />
          </>
        )}
        {selectedTracks && renderSelectedRow()}
        {tracks.length > 0 && (
          <>
            <h1>List of tracks</h1>
            {renderRow()}
          </>
        )}
      </div>
    </div>
  );
};
