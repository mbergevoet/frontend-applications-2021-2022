import { useContext } from "react";
import StarWarsContext from "../providers/StarWarsContext";

const CharacterDetails = () => {

    const starWarsJson = useContext(StarWarsContext);
    const path = window.location.pathname;
    const query = path.replace("/character/", "https://swapi.dev/api/people/");

    const selectedCharacter = starWarsJson.results.filter(character => {
        return character.url === query;
    });

    // console.log(selectedCharacter)

    // const objetify = Object.assign({}, selectedCharacter);

    console.log(selectedCharacter[0]);

    const yearNumber = selectedCharacter[0].birth_year.replace("BBY", "")

    const episodeOrder = ["A New Hope", "The Empire Strikes Back", "Return Of The Jedi", "The Phantom Menace", "Attack Of The Clones ", "Revenge Of The Sith"];

    return (
        <div class="character-detail-wrapper">
            <ul>
                <li class="name">{selectedCharacter[0].name} appeared in:
                    <ul>
                    {selectedCharacter[0].films.map(film => {
                        const lastSlash = film.replace("https://swapi.dev/api/films/", "")
                        const episodeNumber = lastSlash.replace("/", "");
                        return <li> {episodeOrder[episodeNumber - 1]} </li>
                    })}
                    </ul>
                </li>
                <li>Is {selectedCharacter[0].height} centimeters tall</li>
                <li>Weighs {selectedCharacter[0].mass} kilograms</li>
                <li>Has {selectedCharacter[0].skin_color} skin</li>
                <li>Has {selectedCharacter[0].eye_color} eyes</li>
                <li>{selectedCharacter[0].hair_color === "n/a" ? "Doesn't have hair" : "Has " + selectedCharacter[0].hair_color + " hair"}</li>
                <li>{selectedCharacter[0].gender === "n/a" ? "Has no gender" : "Is " + selectedCharacter[0].gender}</li>
                <li>Was born {yearNumber} years before the battle of Yavin</li>
                <li>Lives on planet {selectedCharacter[0].homeworld}</li>
                <li>{!selectedCharacter[0].species[0] ? "Is human" : selectedCharacter[0].species[0]}</li>
            </ul>
        </div>
    );
};

export default CharacterDetails