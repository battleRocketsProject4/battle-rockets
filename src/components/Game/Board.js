import boardCoordinates from './boardCoordinates';
import { useState } from 'react';

export default function Game({ userRocketLength }) {
  console.log(boardCoordinates.horizontalBoard);

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
    <div className='gameContainer'>
      <div className='p1Board'>
        {boardCoordinates.map((board) => {
          return board.map((tile) => {
            return (
              <div
                className={isActive ? `tile` : `rocketplaced`}
                onClick={handlePlaceRocket}
                key={tile}
              ></div>
            );
          });
        })}
      </div>
    </div>
  );
}
