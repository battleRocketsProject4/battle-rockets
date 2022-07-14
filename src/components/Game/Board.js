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

  const handlePlaceRocket = (coordA, coordB) => {
    // setActive(!isActive);
    // // setTileState('rocket placed');

    // if (userRocketLength === 2) {
    //   console.log(userRocketLength);
    // }

    console.log(coordA, coordB)
  };

  return (
    <div className='gameContainer'>
      <div className='p1Board'>
        {boardCoordinates.map((board, outerIndex) => {
          return board.map((tile, innerIndex) => {

            return (
              <div
                className='tile'
                onClick={() => {
                  handlePlaceRocket(outerIndex, innerIndex)
                }}
                key={`${outerIndex}${innerIndex}`}
              ></div>
            );
          });
        })}
      </div>
    </div>
  );
}

