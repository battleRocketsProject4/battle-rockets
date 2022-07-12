import IndividualShip from './IndividualShip';
import { useState } from 'react';
import allRockets from '../rocketInfo';

const Ship = () => {
  const handleSelectRocket = () => { };

  return (
    <div className='rocketsContainer'>
      <IndividualShip handleSelectRocket={handleSelectRocket} />
    </div>
  );
};

export default Ship;
