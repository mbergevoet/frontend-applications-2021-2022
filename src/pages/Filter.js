import { useContext, useState } from "react";
import StarWarsContext from "../providers/StarWarsContext";
import CharacterCard from "../components/CharacterCard";

const Episodes = [
    { id: "https://swapi.dev/api/films/4/", label: "Episode 1" },
    { id: "https://swapi.dev/api/films/5/", label: "Episode 2" },
    { id: "https://swapi.dev/api/films/6/", label: "Episode 3" },
    { id: "https://swapi.dev/api/films/1/", label: "Episode 4" },
    { id: "https://swapi.dev/api/films/2/", label: "Episode 5" },
    { id: "https://swapi.dev/api/films/3/", label: "Episode 6" }
]

const Filter = () => {
    const [selectedEpisode, setEpisode] = useState("");
    const onEpisodeChange = (e) => {
        setEpisode(e.currentTarget.value)
    }
    const starWarsJson = useContext(StarWarsContext);
    const filtered = starWarsJson && selectedEpisode ? starWarsJson.results.filter(item => {
        return item.films.includes(selectedEpisode);
    }) : starWarsJson?.results

    if (!filtered) {
        return null
    }

    // Maps over the json results array with characters and for each item in the array it will create a character card. Using the spread operator I give the character card all the data of each character card
    return (
        <>
            <div>
                <p>Select an episode to see the characters</p>
                <select name="episodeSelector" id="select-episode" value={selectedEpisode} onChange={onEpisodeChange}>
                    <option value="">Select Episode</option>
                    {Episodes.map(e => (
                        <option value={e.id} >{e.label}</option>
                    ))}
                </select>
            </div>
            <div class="filter-wrapper">
                {filtered?.map((character) => (
                    <CharacterCard {...character} />
                ))}
            </div>
        </>
    );
};

export default Filter;