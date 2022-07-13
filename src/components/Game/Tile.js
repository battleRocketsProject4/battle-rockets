import { useState } from 'react';

const Tile = ({ userRocketLength, setUserRocketLength, key }) => {
  const [isActive, setActive] = useState(true);

  // const [isEmpty, setIsEmpty] = useState(true);
  // const [isHit, setIsHit] = useState('b');
  // const [isSunk, setIsSunk] = useState('c');
  // const [hasMissed, setIsMissed] = useState('d');
  // const [isSet, setIsSet] = useState('e');

  // const [tileState, setTileState] = useState('');

  const handlePlaceRocket = () => {
    setActive(!isActive);
    // setTileState('rocket placed');

    if (userRocketLength === 2) {
      console.log(userRocketLength);
    }
  };

  return (
    <div
      className={isActive ? `tile` : `rocketplaced`}
      onClick={handlePlaceRocket}
    ></div>
  );
};

export default Tile;

// 2 3D arrays, 1 for each player
// A state for each state a tile could be in (a, b, c, d, e)
// Populate with a's since tiles are initially empty

// Loop through array and get data on each tile
// Switch state of tile from initial state

// Pass function down as props that allows for the user's choice (click) to be passed back up to the data structure
