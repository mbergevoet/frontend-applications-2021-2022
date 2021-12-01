import { useContext, useState } from "react";
import StarWarsContext from "../providers/StarWarsContext";
import CharacterCard from "../components/CharacterCard";

// array that is needed for the selec input on the filter page
const Episodes = [
    { id: "https://swapi.dev/api/films/4/", label: "Episode 1", title: "The Phantom Menace" },
    { id: "https://swapi.dev/api/films/5/", label: "Episode 2", title: "Attack Of The Clones" },
    { id: "https://swapi.dev/api/films/6/", label: "Episode 3", title: "Revenge Of The sith" },
    { id: "https://swapi.dev/api/films/1/", label: "Episode 4", title: "A New Hope" },
    { id: "https://swapi.dev/api/films/2/", label: "Episode 5", title: "The Empire strikes Back" },
    { id: "https://swapi.dev/api/films/3/", label: "Episode 6", title: "Return Of The Jedi" }
];

const Filter = () => {
    const [selectedEpisodeId, setEpisode] = useState("");
    const onEpisodeChange = (e) => {
        // sets the value of setEpisode to the value of the select input 
        setEpisode(e.currentTarget.value)
    }
    // Get the star wars data from the context
    const starWarsJson = useContext(StarWarsContext);

    // if a episode id has been selected and there is an Episodes array find the item where they are the same as the selectedEpisodeId
    const selectedEpisode = selectedEpisodeId && Episodes.find(item => item.id === selectedEpisodeId);

    // if there is starWarsJson and there is a selectedEpisodeId filter the characters where the EpsiodeId is the same as selectedEpisodeId
    const filtered = starWarsJson && selectedEpisodeId ? starWarsJson.results.filter(item => {
        return item.films.includes(selectedEpisodeId);
        // if they are both not there make filtered all the starWarsJson, which are all the characters unfiltered
    }) : starWarsJson?.results

    // if there is no filtered return nothing
    if (!filtered) {
        return null
    }

    return (
        <>
            <div class="select-wrapper">
                <h1>select an episode to see the characters</h1>
                <select name="episodeSelector" id="select-episode" value={selectedEpisodeId} onChange={onEpisodeChange}>{/* when the selec inout changes, this function is triggered */}
                    <option value="">Select Episode</option>
                    {/* Maps over the starWarsJson results array with characters and for each item in the array it will create a character card. Using the spread operator I give the character card all the data of each character card */}
                    {Episodes.map(item => (
                        <option value={item.id}>{item.label}</option>
                    ))}
                </select>
                <h1>{selectedEpisode && selectedEpisode.title}</h1>
            </div>
            <div class="filter-wrapper">
                {/* filtered might be there so ? and then map over the fitlered characters and make a CharacterCard for each character in filtered */}
                {filtered?.map((character) => (
                    <CharacterCard {...character} />
                ))}
            </div>
        </>
    );
};

export default Filter;