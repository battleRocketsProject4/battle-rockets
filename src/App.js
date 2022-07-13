import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import rocketInfo from './components/rocketInfo';
import LandingPage from './components/LandingPage';
import RocketData from './components/RocketData';
import Game from './components/Game/Game';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';


function App() {
  const [rocketsData, setRocketsData] = useState([]);
  const [index, setIndex] = useState(0);

  // click event for carousel 
  const slideLeft = () => {
    if (index - 1 >= 0) {
      setIndex(index -1);
    }
  };

  const slideRight = () => {
    if (index + 1 <= rocketInfo.length -1) {
      setIndex(index + 1);
    }
  };


  const handleMouseDown = (e) => {
    console.log(e.target);
  }



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
      <LandingPage />;

      {/* Carousel */}
      <div className='App'>
        <div className='container'>
          <div className='card-container'>
            <div className='background-block'>
            <FontAwesomeIcon
            onClick={slideLeft}
            className="leftBtn"
            icon={faArrowAltCircleLeft}
          />
          <FontAwesomeIcon
            onClick={slideRight}
            className="rightBtn"
            icon={faArrowAltCircleRight}
          />
            </div>
          {rocketInfo.map((allRockets, n) => {
            let position = n > index ? 'nextCard' : n === index ? "activeCard" : "prevCard";
            return <Card
            handleMouseDown={handleMouseDown}{...allRockets}cardStyle={position} />
          })}
          </div>
        </div>
      </div>



      {/* <div className='rocketDataContainer'>
        {rocketsData.map((rocketDetail) => {
          return (
            <RocketData
              key={rocketDetail.id}
              rocketName={rocketDetail.rocket_name}
              rocketPic={rocketDetail.flickr_images}
              rocketInfo={rocketDetail.description}
            />
          );
        })}
      </div> */}
    </div>
  );

  }

 

  
  
export default App;
