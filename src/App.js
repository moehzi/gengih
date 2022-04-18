import './App.css';
import SearchBar from './pages/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Trending from './pages/Trending';
import Navbar from './components/Navbar/index';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route path="/trending" component={Trending} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
