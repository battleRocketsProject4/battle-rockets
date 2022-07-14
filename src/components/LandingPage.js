import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Form from './Form';
import RocketPage from './RocketPage';
import Game from './Game/Game'
import ErrorPage from './ErrorPage';
import Footer from './Footer';

const LandingPage = ({ rocketData }) => {
  return (
    <>
      <div className='fullscreen'>
        <header className='wrapper'>
          <Link to={`/`}>
            <h1>battle rockets</h1>
          </Link>
        </header>
        <main className='wrapper'>
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/rockets' element={<RocketPage rocketData = { rocketData } />} />
            <Route path='/game' element={<Game />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
