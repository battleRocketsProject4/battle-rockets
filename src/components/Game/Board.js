import boardCoordinates from './boardCoordinates';
import { useState } from 'react';

export default function Game({ userRocketLength }) {

  const [isActive, setActive] = useState(true);

  // const [isEmpty, setIsEmpty] = useState(true);
  // const [isHit, setIsHit] = useState('b');
  // const [isSunk, setIsSunk] = useState('c');
  // const [hasMissed, setIsMissed] = useState('d');
  // const [isSet, setIsSet] = useState('e');

  const [tileState, setTileState] = useState('a');

  const handlePlaceRocket = (coordA, coordB, tile) => {
    // setActive(!isActive);
    // // setTileState('rocket placed');

    // if (userRocketLength === 2) {
    //   console.log(userRocketLength);
    // }

    // setTileState('b')
    // console.log(boardCoordinates[coordA][coordB])

    tile = 'b';
    setTileState(tile);

    console.log(tileState)

    // console.log(boardCoordinates[coordA][coordB])
    console.log(coordA, coordB)
  };

  return (
    <div className='gameContainer'>
      <div className='p1Board'>
        {boardCoordinates.map((board, outerIndex) => {
          return board.map((tile, innerIndex) => {

            return (
              <div
                className={`tile ${tileState}`}
                onClick={() => {
                  handlePlaceRocket(outerIndex, innerIndex, tile)
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

