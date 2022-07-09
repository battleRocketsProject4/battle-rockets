import { useState } from "react";
import rocketImage from './assets/rocket.svg';
import Modal from './Modal';

const Form = () => {

  const [modal, setModal] = useState(false);

  const handleModalClick = () => {
    console.log('button has been clicked');
    setModal(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault(event);
  }

  return (
    <>
      <form 
        action='submit'
        onSubmit={handleSubmit}
      >
        <div className="formContainer">
          <label htmlFor='playerName'>Astronauts, enter your name</label>
          <div className='inputContainer'>
            <input type='text' id='playerName' placeholder='Astronaut 1' />
            <input type='text' id='playerName' placeholder='Astronaut 2' />
          </div>
          <p>
            Never played Battle Rockets before?  
            <button 
              className='learnMoreBtn'
              onClick={handleModalClick}
            >Click here</button>
          </p>
          <button>take off!</button>
        </div>
      </form>
      <img className='rocket' src={rocketImage} alt='graphic of a rocket ship taking off '/>
      {modal && <Modal />}
    </>
  );
};

export default Form;
