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

interface LocationState {
  pathname: string;
}

function App() {
  const user = useSelector((state: RootState) => state.user?.value);
  const location = useLocation<LocationState>();
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
