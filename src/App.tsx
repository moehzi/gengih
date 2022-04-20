import './App.css';
import { CreatePlaylist } from './pages/create-playlist';
import { Homepage } from './pages/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { YourPlaylist } from './pages/your-playlist';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

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
      </Switch>
    </div>
  );
}

export default App;
