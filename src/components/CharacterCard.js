// The CharacterCard recieves all the data and only uses the fields taht are needed. Then it injects them inside a list to display them in the App.
import characterIcon from '../images/character-icon.png';

function CharacterCard({ name, height, mass, eye_color, birth_year }) {
    return (
        <div class="character-card">
            <h2>{name}</h2>
            <img src={characterIcon} alt="Darth Vader Icon" />
            <ul>
                <li>{height}</li>
                <li>{mass}</li>
                <li>{eye_color}</li>
                <li>{birth_year}</li>
            </ul>
        </div>
    );
}

export default CharacterCard;