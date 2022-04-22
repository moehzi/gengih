import './App.css';
import { CreatePlaylist } from './pages/create-playlist';
import { Homepage } from './pages/home';
import { Switch, Route, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { YourPlaylist } from './pages/your-playlist';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { DetailPlaylist } from './pages/detail-playlist';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setToken } from './store/authSlice';

interface LocationState {
  pathname: string;
}

function App() {
  const user = useSelector((state: RootState) => state.user?.value);
  const location = useLocation<LocationState>();
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = window.location.hash;
    let access_token = localStorage.getItem('token');

    if (!access_token && hash) {
      access_token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        ?.split('=')[1] as string;
      localStorage.setItem('token', access_token);
      window.location.hash = '';
      dispatch(setToken(access_token));
    }

    if (access_token) {
      dispatch(setToken(localStorage.getItem('token')));
    }
  }, [dispatch]);
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#060606',
        padding: '2rem 0',
      }}
    >
      {location.pathname !== '/' ? user && <Navbar /> : null}
      <Switch>
        <Route path="/create-playlist">
          <CreatePlaylist />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/your-playlist">
          <YourPlaylist />
        </Route>
        <Route exact path="/playlist/:id">
          <DetailPlaylist />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
