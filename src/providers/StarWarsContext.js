import { createContext, useState, useEffect } from 'react';
import peopleData from '../data/people-data.json';

// Creates an empty context
const StarWarsContext = createContext(null);

export const StarWarsProvider = ({ children }) => {
    const [json, setJson] = useState(null);

    // After rendering set the json variable to the imported people-data.json
    useEffect(() => {
        setJson(peopleData);
    }, []);

    return (
        // returns the json as a propertie and grants access to it for every child component
        <StarWarsContext.Provider value={json}>{children}</StarWarsContext.Provider>
    );
};

export default StarWarsContext;