import { useState } from 'react';
import Board from './Board';
import Tile from './Tile';
import Ship from './Ship';

const Game = () => {
  return (
    <>
      <Ship />
      <div className='gameBoard'>
        <Board />
      </div>
    </>
  );
};

export default Game;
