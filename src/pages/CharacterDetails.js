import { useContext } from "react";
import StarWarsContext from "../providers/StarWarsContext";

const CharacterDetails = () => {

    const starWarsJson = useContext(StarWarsContext);
    const path = window.location.pathname;
    const query = path.replace("/character/", "https://swapi.dev/api/people/");

    const selectedCharacter = starWarsJson.results.filter(character => {
        return character.url === query;
    });

    // const objetify = selectedCharacter.reduce((accumulator, value) => ({ ...accumulator, [value]: value }), {});
    const objetify = Object.assign({}, selectedCharacter);

    console.log(objetify[0]);

    const yearNumber = objetify[0].birth_year.replace("BBY", "")

    return (
        <ul style={{ color: "#fff" }}>
            <li>{objetify[0].name} appeared in
                {objetify[0].films.map(film => {
                    const lastSlash = film.replace("https://swapi.dev/api/films/", "Episode ")
                    const episodeNumber = lastSlash.replace("/", "");
                    return <span> {episodeNumber} </span>
                })}
            </li>
            <li>Is {objetify[0].height}cm tall</li>
            <li>Weighs {objetify[0].mass}kg</li>
            <li>Has {objetify[0].skin_color} skin</li>
            <li>Has {objetify[0].eye_color} eyes</li>
            <li>{objetify[0].hair_color === "n/a" ? "Doesn't have hair" : "Has " + objetify[0].hair_color + " hair"}</li>
            <li>{objetify[0].gender === "n/a" ? "Has no gender" : "Is " + objetify[0].gender}</li>
            <li>Was born {yearNumber} years before the battle of Yavin</li>
            <li>Lives on planet {objetify[0].homeworld}</li>
            <li>{!objetify[0].species[0] ? "Is human" : objetify[0].species[0]}</li>
        </ul>
    );
};

export default CharacterDetails