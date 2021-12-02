// The CharacterCard recieves all the data and only uses the fields taht are needed. Then it injects them inside a list to display them in the App.
import { Link } from 'react-router-dom';
import characterIcon from '../images/character-icon.png';

function CharacterCard({ name, height, mass, eye_color, birth_year, url }) {
    const id = url.replace("https://swapi.dev/api/people/", "");
    return (
        <Link class="character-card" to={`/character/${id}`}>
            <h2>{name}</h2>
            <img src={characterIcon} alt="Darth Vader Icon" />
            <ul>
                <li>{height} cm</li>
                <li>{mass === "unknown" ? mass + " mass" : mass + "kg"}</li>
                <li>{eye_color} eyes</li>
                <li>{birth_year === "unknown" ? "birth year " + birth_year : birth_year}</li>
            </ul>
        </Link>
    );
}

export default CharacterCard;