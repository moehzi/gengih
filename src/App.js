import './App.css';
import SearchBar from './pages/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Trending from './pages/Trending';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route path="/trending" component={Trending} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
