import { useContext } from "react";
import StarWarsContext from "../providers/StarWarsContext";

function Visualisation() {
    const starWarsJson = useContext(StarWarsContext);

    if (starWarsJson) {
        const eyeColor = Object.values(starWarsJson.results.reduce((accumulator, item) => {
            if (!accumulator[item.eye_color]) {
                // if not exists make the color
                accumulator[item.eye_color] = { count: 1, eye_color: item.eye_color }
            } else {
                // if exists add to existing color
                accumulator[item.eye_color].count++;
            }
            return accumulator
        }, {}));

        // const eyeColorCount = [];
        // eyeColor.forEach(item => {
        //     // if not exists make it one
        //     if (!eyeColorCount[item.eye_color]) {
        //         eyeColorCount[item.eye_color] = 1;
        //         // if exists add one
        //     } else {
        //         eyeColorCount[item.eye_color]++;
        //     }
        // });  

        console.log(eyeColor.count);
    }

    return (
        <div class="visualitation-wrapper">
            <h1>Visualisation here</h1>
        </div>
    );
}

export default Visualisation;