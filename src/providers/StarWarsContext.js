import { createContext, useState, useEffect } from 'react';
import peopleData from '../data/people-data.json';

const StarWarsContext = createContext(null);

export const StarWarsProvider = ({ children }) => {
    const [json, setJson] = useState(null);
    useEffect(() => {
        setJson(peopleData);
    }, []);

    return (
        <StarWarsContext.Provider value={json}>{children}</StarWarsContext.Provider>
    );
};

export default StarWarsContext;