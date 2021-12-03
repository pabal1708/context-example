import { createContext } from 'react';


export const ThingsProvider = (props) => {
const pepe = "Pepite";


return (
    <div>
    <ThingsContext.Provider value={[pepe]}>
        {props.children}
    </ThingsContext.Provider>
    </div>
);
};
export const ThingsContext = createContext();

