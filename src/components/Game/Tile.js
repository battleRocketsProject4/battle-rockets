import allRockets from '../rocketInfo';
import { useState } from 'react';

const Tile = () => {
  const [isActive, setActive] = useState(true);

  const handlePlaceRocket = () => {
    setActive(!isActive);
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
