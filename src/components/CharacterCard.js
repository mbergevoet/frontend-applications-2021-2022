import { Link } from 'react-router-dom';
import characterIcon from '../images/character-icon.svg';

// The CharacterCard recieves all the data and only uses the fields that are needed. Then it injects them inside a list to render them in the App.
function CharacterCard({ name, height, mass, eye_color, birth_year, url }) {
    const id = url.replace("https://swapi.dev/api/people/", "");
    return (
        // Link to the character route with the corresponding id which comes from the url property inside each character
        <Link class="character-card" to={`/character/${id}`}>
            <h2>{name}</h2>
            {/* Uses the import for the src in the image */}
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