import starWarsLogo from '../images/starwarslogowhite.png';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header>
            <div>
                <img src={starWarsLogo} alt="Star Wars Logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/filter">Filter</Link>
                    </li>
                    <li>
                        <Link to="/visualisation">Visualisation</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;