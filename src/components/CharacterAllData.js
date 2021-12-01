import characterIcon from '../images/character-icon.png';

function CharacterAllData({ name, height, mass, eye_color, birth_year, url }) {
    const id = url.replace("https://swapi.dev/api/people/", "");
    return (
        <div>
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

export default CharacterAllData;