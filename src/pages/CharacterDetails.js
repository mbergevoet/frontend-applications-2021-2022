import { useContext } from "react";
import StarWarsContext from "../providers/StarWarsContext";

const CharacterDetails = () => {

    const starWarsJson = useContext(StarWarsContext);
    const path = window.location.pathname;
    const query = path.replace("/filter/", "https://swapi.dev/api/people/");
    
    // const selectedCharcter = starWarsJson.results.find(item => item.url === query);
    // console.log(starWarsJson.results);

    starWarsJson.results.map(character => {
        // if (query in character.url) {
        //     console.log(character);
        // }
        const selectedCharcter = character.find(key => key.url === query);
        console.log(selectedCharcter);
    });

    return (
        <p style={{color: "#fff"}}>test</p>
    );
    
};

export default CharacterDetails