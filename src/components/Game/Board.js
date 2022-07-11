import Tile from './Tile';

export default function Game() {
  return (
    <div className='gameContainer'>
      <div className='player1Container'>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
      <div className='player2Container'></div>
    </div>
  );
}
