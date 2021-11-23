import { useContext } from "react";
import StarWarsContext from "../providers/StarWarsContext";
import CharacterCard from "./CharacterCard";

const CharacterData = () => {
    const starWarsJson = useContext(StarWarsContext);

    if (!starWarsJson) {
        return null
    }

    return (
        <div class="character-wrapper">
            {starWarsJson?.results.map((character) => (
                <CharacterCard {...character} />
            ))}
        </div>
    );
};

export default CharacterData;