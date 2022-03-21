import logo from './logo.svg';
import './App.css';
import { HomeworkTwo } from './pages/homework-2';

function App() {
  const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY;
  console.log(giphy_secret_key);
  return (
    <div className="App">
      <HomeworkTwo />
    </div>
  );
}

export default App;
