import rocketImage from './assets/rocket.svg';

const Form = () => {
  return (
    <div className="formContainer">
      <form className='wrapper' action='submit'>
        <label htmlFor='playerName'>Astronauts, enter your name</label>
        <div className='inputContainer'>
          <input type='text' id='playerName' placeholder='Astronaut 1' />
          <input type='text' id='playerName' placeholder='Astronaut 2' />
        </div>
        <p>
          Never played Battle Rockets before? <a href='#'>Click here</a>
        </p>
        <button>take off!</button>
      </form>
      <img className='rocket' src={rocketImage} alt='graphic of a rocket ship taking off '/>
    </div>
  );
};

export default Form;
