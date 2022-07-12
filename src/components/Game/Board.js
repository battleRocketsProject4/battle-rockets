import Tile from './Tile';
import boardCoordinates from './boardCoordinates';

export default function Game({ userRocketLength, setUserRocketLength }) {
  console.log(boardCoordinates.horizontalBoard);

  return (
    <div className='gameContainer'>
      <div className='p1Board'>
        {boardCoordinates.map((board) => {
          return board.map((tile) => {
            return (
              <Tile
                userRocketLength={userRocketLength}
                setUserRocketLength={setUserRocketLength}
              />
            );
          });
        })}
      </div>
    </div>
  );
}
