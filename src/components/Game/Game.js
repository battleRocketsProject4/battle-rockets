import { useState } from 'react';
import Board from './Board';
import Tile from './Tile';
import Ship from './Ship';

const Game = () => {
  return (
      <section className="game">
        <h2>Player one place your pieces</h2>
        <div className='gameboards'>
          <div className='p1Container'>
            <Ship />
            <Board />
          </div>

          <div className='p2Container'>
            <Ship />
            <Board />
          </div>
        </div>
    </section>
  );
};

export default Game;
