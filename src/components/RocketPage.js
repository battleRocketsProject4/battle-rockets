import { Link } from 'react-router-dom';
import Carousel from './Carousel';

const RocketPage = ({ rocketData }) => {
    return (
        <section className='rocketPage'>
            <h2>Rockets</h2>
            <Carousel rocketData = { rocketData }/>
            <Link to={`/game`}>
                <button className='next'>next</button>
            </Link>
        </section>
    );
};

export default RocketPage;
