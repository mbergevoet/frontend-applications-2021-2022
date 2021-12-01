import { useContext } from "react";
import StarWarsContext from "../providers/StarWarsContext";

const CharacterDetails = () => {

    const starWarsJson = useContext(StarWarsContext);
    const path = window.location.pathname;
    const query = path.replace("/filter/", "https://swapi.dev/api/people/");

    const selectedCharacter = starWarsJson.results.filter(character => {
        return character.url === query;
    });

    // const objetify = selectedCharacter.reduce((accumulator, value) => ({ ...accumulator, [value]: value }), {});
    const objetify = Object.assign({}, selectedCharacter);

    console.log(objetify[0]);

    return (
        // <p style={{ color: "#fff" }}>{ }</p>
        <ul style={{ color: "#fff" }}>
            <li>{objetify[0].name}</li>
            <li>{objetify[0].height}cm</li>
            <li>{objetify[0].mass}kg</li>
            <li>{objetify[0].skin_color}</li>
            <li>{objetify[0].eye_color}</li>
            <li>{objetify[0].hair_color}</li>
            <li>{objetify[0].gender}</li>
            <li>{objetify[0].birth_year}</li>
            <li>{objetify[0].homeworld}</li>
            <li>{objetify[0].species[0]}</li>
        </ul>
    );
    
};

export default CharacterDetails