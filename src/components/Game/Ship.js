import allRockets from '../rocketInfo';

const Ship = () => {
  // const [shipSquares, setShipSquares] = useState('');

  const handleSelectRocket = () => {
    let rocketLength = allRockets[0].length;
    console.log(rocketLength);
  };

  return (
    <div className='shipsContainer'>
      {/* Player 1 container */}
      <div className='player1Container'>
        <div className='ship' id='ship1' onClick={handleSelectRocket}>
          <div className='shipTitle'>Falcon 1</div>
          <div className='shipSquares'>
            <div className='square'></div>
            <div className='square'></div>
          </div>
        </div>
        <div className='ship' id='ship2' onClick={handleSelectRocket}>
          <div className='shipTitle'>Falcon Heavy</div>
          <div className='shipSquares'>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
          </div>
        </div>
        <div className='ship' id='ship3' onClick={handleSelectRocket}>
          <div className='shipTitle'>Falcon 9</div>
          <div className='shipSquares'>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
          </div>
        </div>
        <div className='ship' id='ship4' onClick={handleSelectRocket}>
          <div className='shipTitle'>Starship</div>
          <div className='shipSquares'>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
          </div>
        </div>
      </div>
      {/* End of player 1 container */}

      {/* player 2 container */}
      <div className='player2Container'>
        <div className='ship' id='ship1'>
          <div className='shipTitle'></div>
          <div className='shipSquares'>
            <div className='square'></div>
            <div className='square'></div>
          </div>
        </div>
        {/* <div className='ship' id='ship2'>
          <div className='shipTitle'></div>
          <div className='shipSquares'>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
          </div>
        </div>
        <div className='ship' id='ship3'>
          <div className='shipTitle'></div>
          <div className='shipSquares'>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
          </div>
        </div>
        <div className='ship' id='ship3'>
          <div className='shipTitle'></div>
          <div className='shipSquares'>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
          </div>
        </div> */}
      </div>
      {/* End of player 2 container */}
    </div>
  );
};

export default Ship;
