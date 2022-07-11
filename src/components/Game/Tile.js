import { useState } from 'react';

const Tile = () => {
  const [isActive, setActive] = useState(true);

  const handlePlaceRocket = () => {
    console.log('Tile clicked');
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
