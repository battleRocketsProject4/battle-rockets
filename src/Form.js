import rocketImage from './assets/rocket.svg';

const Form = () => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="formContainer">
          <label htmlFor='playerName'>Astronauts, enter your name</label>
          <div className='inputContainer'>
            <input type='text' id='playerName' placeholder='Astronaut 1' />
            <input type='text' id='playerName' placeholder='Astronaut 2' />
          </div>
          <p>
            Never played Battle Rockets before?  <span><a href='#'>Click here</a></span>
          </p>
          <button onSubmit ={handleSubmit}>take off!</button>
        </div>
      </form>
      <img className='rocket' src={rocketImage} alt='graphic of a rocket ship taking off '/>
    </>
  );
};

export default Form;
