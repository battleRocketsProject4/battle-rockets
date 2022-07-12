import allRockets from '../rocketInfo';

const Ship = () => {
  // const [shipSquares, setShipSquares] = useState('');

  const handleSelectRocket = () => {
    let rocketLength = allRockets[0].length;
    console.log(rocketLength);
  };

  return (
    <div className='rocketsContainer'>
      {/* Player 1 container */}
      <div className='p1Rockets'>
        <div className='rocket' id='rocket1' onClick={handleSelectRocket}>
          <p className='rocketTitle'>Falcon 1</p>
          <div className='rocketPiece'>
            <div className='square'></div>
            <div className='square'></div>
          </div>
        </div>
        <div className='rocket' id='rocket2' onClick={handleSelectRocket}>
          <p className='rocketTitle'>Falcon Heavy</p>
          <div className='rocketPiece'>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
          </div>
        </div>
        <div className='rocket' id='rocket3' onClick={handleSelectRocket}>
          <p className='rocketTitle'>Falcon 9</p>
          <div className='rocketPiece'>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
          </div>
        </div>
        <div className='rocket' id='rocket4' onClick={handleSelectRocket}>
          <p className='rocketTitle'>Starship</p>
          <div className='rocketPiece'>
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
      {/* <div className='player2Container'>
        <div className='ship' id='ship1'>
          <div className='shipTitle'></div>
          <div className='shipSquares'>
            <div className='square'></div>
            <div className='square'></div>
          </div>
        </div> */}
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
      {/* </div> */}
      {/* End of player 2 container */}
    </div>
  );
};

export default Ship;
