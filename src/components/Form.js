import { useState } from "react";
import { Link } from 'react-router-dom';
import rocketImage from '../assets/rocket.svg';
import Modal from './Modal';

const Form = () => {

  const [openModal, setOpenModal] = useState(false);

  const handleModalClick = () => {
    setOpenModal(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault(event);
  }

  return (
    <>
      <section className="formContainer">
        <form
          action='submit'
          onSubmit={handleSubmit}
        >
          <div className="formContent">
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
            <Link to={`/rockets`}>
              <button>take off!</button>
            </Link>
          </div>
        </form>
        <img aria-hidden="true" className='rocketImg' src={rocketImage} alt='graphic of a rocket ship taking off ' />
      </section>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Form;
