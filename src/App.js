import logo from './logo.svg';
import './App.css';
import SearchBar from './pages/Search';

function App() {
  const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY;
  console.log(giphy_secret_key);
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
