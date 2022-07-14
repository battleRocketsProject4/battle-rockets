import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';

function App() {
  const [rocketsData, setRocketsData] = useState([]);

  useEffect(() => {
    axios({
      baseURL: 'https://api.spacexdata.com/v3/rockets',
      method: 'GET',
    }).then((rocketsData) => {
      setRocketsData(rocketsData.data);
      console.log(rocketsData.data);
    });
  }, []);

  return (
    <div className='App'>
      <LandingPage rocketData={rocketsData}/>;
    </div>
  );
}
export default App;
