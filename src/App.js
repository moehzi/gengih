import logo from './logo.svg';
import './App.css';
import SearchBar from './pages/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Trending from './pages/Trending';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <SearchBar />
          </Route>
          <Route path="/trending">
            <Trending />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
