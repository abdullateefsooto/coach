import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({ children }) => {
const [firstName, setFirstName] = useState("my name is");
const increase = () => {
    setFirstName("abdullateef")
}
    return <GlobalContext.Provider value={{firstName, setFirstName, increase}}>
        {children}
    </GlobalContext.Provider>
};

export default AppContext