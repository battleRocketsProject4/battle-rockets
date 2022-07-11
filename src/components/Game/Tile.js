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
