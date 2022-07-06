const Form = () => {
  return (
    <form action='submit'>
      <label htmlFor='playerName'>astronauts enter your name</label>
      <div className='inputContainer'>
        <input type='text' id='playerName' placeholder='Astronaut 1' />
        <input type='text' id='playerName' placeholder='Astronaut 2' />
      </div>
      <p>
        never played Battle Rockets before?
        <span>
          <a href='#'>click here</a>
        </span>
      </p>
      <button>take off!</button>
    </form>
  );
};

export default Form;
