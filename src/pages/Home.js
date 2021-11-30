import { Link } from 'react-router-dom';

function Home() {
    return (
        <div class="home-wrapper">
            <Link to="/filter">star Wars Character Filter</Link>
            <Link to="/visualisation">star Wars Visualisation</Link>
        </div>
    );
}

export default Home;