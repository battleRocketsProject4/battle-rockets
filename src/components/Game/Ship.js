import IndividualShip from './IndividualShip';

const Ship = ({ userRocketLength, setUserRocketLength }) => {
  return (
    <div className='rocketsContainer'>
      <IndividualShip
        userRocketLength={userRocketLength}
        setUserRocketLength={setUserRocketLength}
      />
    </div>
  );
};

export default Ship;
