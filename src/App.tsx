import './App.css';
import { CreatePlaylist } from './pages/create-playlist';
import { Homepage } from './pages/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { YourPlaylist } from './pages/your-playlist';

function App() {
  return (
    <div>
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
