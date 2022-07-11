import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import RocketData from './components/RocketData';
function App() {

  const [rocketsData, setRocketsData] = useState([])

  useEffect( ()=> {
    axios ({
      baseURL:'https://api.spacexdata.com/v3/rockets',
      method: 'GET',
    }).then ((rocketsData) => {
      setRocketsData(rocketsData.data)
      console.log(rocketsData.data);
    });
  }, [])

  return (
    <div className="App">
       <LandingPage 
       
       />;
      <div className="rocketDataContainer">
        {rocketsData.map((rocketDetail) => {
          return((
            <RocketData
              key={rocketDetail.id}
              rocketName={rocketDetail.rocket_name}
              rocketPic={rocketDetail.flickr_images}
              rocketInfo={rocketDetail.description}
            />

          ))

        })}
      </div>
    </div>
  );
}
export default App;
