import { useContext } from "react";
import StarWarsContext from "../providers/StarWarsContext";
import ForceLayout from "../components/ForceLayout";

function Visualisation() {
    const starWarsJson = useContext(StarWarsContext);
    let eyeColor = {};

    if (starWarsJson) {
        eyeColor = Object.values(starWarsJson.results.reduce((accumulator, item) => {
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

        console.log(eyeColor);
    }

    return (
        <div class="visualitation-wrapper">
            <div class="header-wrapper">
                <h1>character eye color distribution</h1>
            </div>
            <ForceLayout data={eyeColor} />
        </div>
    );
}

export default Visualisation;