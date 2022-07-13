import { Link } from 'react-router-dom';

const RocketPage = () => {
    return (
        <div>
            <h2>Rockets</h2>
            <Link to={`/game`}>
                <button>next</button>
            </Link>
        </div>
    );
};

export default RocketPage;
