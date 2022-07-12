import Board from './Board';
import Ship from './Ship';
import { useState } from 'react';

const Game = () => {
  const [userRocketLength, setUserRocketLength] = useState(null);

  return (
    <section className='game'>
      <h2>Player one place your pieces</h2>
      <div className='gameboards'>
        <div className='p1Container'>
          <Ship
            userRocketLength={userRocketLength}
            setUserRocketLength={setUserRocketLength}
          />
          <Board
            userRocketLength={userRocketLength}
            setUserRocketLength={setUserRocketLength}
          />
        </div>

        <div className='p2Container'>
          <Ship
            userRocketLength={userRocketLength}
            setUserRocketLength={setUserRocketLength}
          />
          <Board
            userRocketLength={userRocketLength}
            setUserRocketLength={setUserRocketLength}
          />
        </div>
      </div>
    </section>
  );
};

export default Game;
