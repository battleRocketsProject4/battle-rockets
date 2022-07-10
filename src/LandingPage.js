import Form from './Form';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <>
      <div className='fullscreen'>
        <header className='wrapper'>
            <h1>battle rockets</h1>
        </header>
        <main className='wrapper'>
          <Form />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
