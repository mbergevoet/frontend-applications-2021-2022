import { useContext } from "react";
import StarWarsContext from "../providers/StarWarsContext";

function Visualisation() {
    const starWarsJson = useContext(StarWarsContext);

    if (starWarsJson) {
        const eyeColor = starWarsJson.results.map((item) => {
            return { eye_color: item.eye_color }
        });
        const eyeColorCount = [];
        eyeColor.forEach(item => {
            // if not exists make it one
            if (!eyeColorCount[item.eye_color]) {
                eyeColorCount[item.eye_color] = 1;
                // if exists add one
            } else {
                eyeColorCount[item.eye_color]++;
            }
        });
        console.log(eyeColorCount);
    }

    return (
        <div class="visualitation-wrapper">
            <h1>Visualisation here</h1>
        </div>
    );
}

export default Visualisation;