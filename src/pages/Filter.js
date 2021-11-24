import { useContext } from "react";
import StarWarsContext from "../providers/StarWarsContext";
import CharacterCard from "../components/CharacterCard";

const Filter = () => {
    const starWarsJson = useContext(StarWarsContext);

    if (!starWarsJson) {
        return null
    }

    // Maps over the json results array with characters and for each item in the array it will create a character card. Using the spread operator I give the character card all the data of each character card
    return (
        <div class="filter-wrapper">
            {starWarsJson?.results.map((character) => (
                <CharacterCard {...character} />
            ))}
        </div>
    );
};

export default Filter;