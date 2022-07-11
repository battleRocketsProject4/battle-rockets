const Ship = () => {
  // const [shipSquares, setShipSquares] = useState('');

  const handleSelectRocket = () => {
    console.log(`I've been clicked`);
  };

  return (
    <div className='shipsContainer'>
      {/* Player 1 container */}
      <div className='player1Container'>
        <div className='ship' id='ship1' onClick={handleSelectRocket}>
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
