import starWarsLogo from '../images/starwarslogowhite.png';

function NavBar() {
    return (
        <header>
            <div>
                <img src={starWarsLogo} alt="Star Wars Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/filter">Filter</a></li>
                    <li><a href="/visualisation">Visualisation</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;