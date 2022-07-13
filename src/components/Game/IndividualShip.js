import allRockets from '../rocketInfo';

const IndividualShip = ({ userRocketLength, setUserRocketLength }) => {
  return (
    <>
      <ul className='player1Container'>
        {allRockets.map((rocket) => {
          return (
            <li
              className='rocket'
              onClick={() => {
                setUserRocketLength(rocket.length);
              }}
              key={rocket.length}
            >
              <p>{rocket.name}</p>
              {rocket.length === 2 ? (
                <>
                  <div className='rocketPiece'>
                    <div className='square'></div>
                    <div className='square'></div>
                  </div>
                </>
              ) : rocket.length === 3 ? (
                <>
                  <div className='rocketPiece'>
                    <div className='square'></div>
                    <div className='square'></div>
                    <div className='square'></div>
                  </div>
                </>
              ) : rocket.length === 4 ? (
                <div className='rocketPiece'>
                  <div className='square'></div>
                  <div className='square'></div>
                  <div className='square'></div>
                  <div className='square'></div>
                </div>
              ) : rocket.length === 5 ? (
                <div className='rocketPiece'>
                  <div className='square'></div>
                  <div className='square'></div>
                  <div className='square'></div>
                  <div className='square'></div>
                  <div className='square'></div>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>

      {/* <ul className='player2Container'>
                {allRockets.map((rocket) => {
                    return (
                        <li
                            onClick={() => {
                                console.log(rocket.length);
                            }}
                        >
                            {rocket.name}
                            {rocket.length === 2 ? (
                                <>
                                    <div className='square'></div>
                                    <div className='square'></div>
                                </>
                            ) : rocket.length === 3 ? (
                                <>
                                    <div className='square'></div>
                                    <div className='square'></div>
                                    <div className='square'></div>
                                </>
                            ) : rocket.length === 4 ? (
                                <>
                                    <div className='square'></div>
                                    <div className='square'></div>
                                    <div className='square'></div>
                                    <div className='square'></div>
                                </>
                            ) : rocket.length === 5 ? (
                                <>
                                    <div className='square'></div>
                                    <div className='square'></div>
                                    <div className='square'></div>
                                    <div className='square'></div>
                                    <div className='square'></div>
                                </>
                            ) : null}
                        </li>
                    );
                })}
            </ul> */}
    </>
  );
};

export default IndividualShip;
