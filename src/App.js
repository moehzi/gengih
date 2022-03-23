import logo from './logo.svg';
import './App.css';
import { HomeworkThree } from './pages/homework-3';

function App() {
  const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY;
  console.log(giphy_secret_key);
  return (
    <div className="App">
      <HomeworkThree />
    </div>
  );
}

export default App;
