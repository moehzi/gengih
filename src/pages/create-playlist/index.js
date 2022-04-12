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
import { toast } from 'react-toastify';
import Toast from '../../components/ToastContainer';
import './style.css';

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

    createPlaylist(user.id, token, payload).then((res) => {
      setValInput({ ...valInput, title: ' ', description: ' ' });

      const tempUri = selectedTracks.map((track) => track.uri);

      addItemToPlaylist(res.data.id, token, tempUri.join(',')).then(() => {
        setTracks([]);
        setSelectedTracks([]);
        setValInput({
          title: '',
          description: '',
          searchInput: '',
        });
        toast.success('Berhasil membuat playlist!', {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
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
            searchInput={valInput.searchInput}
          />
        ) : (
          <Redirect to="/" />
        )}
        <div className={selectedTracks.length > 0 && 'content-wrapper'}>
          {selectedTracks.length > 0 && (
            <div>
              <FormPlaylist
                title={valInput.title}
                description={valInput.description}
                handleChange={handleChange}
                handleSubmitPlaylist={handleSubmitPlaylist}
              />
              <h1 style={{ margin: '1rem 0' }}>Selected tracks</h1>
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
              <h1 style={{ marginBottom: '1rem' }}>List of tracks</h1>
              <div className="row">{renderRow()}</div>
            </div>
          )}
        </div>
        <Toast />
      </div>
    </div>
  );
};
