import { createContext, useState, useContext } from "react"; 

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
    }

    const value = {
        search,
        setSearch,
        handleSubmit
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext);

export {GlobalProvider, useGlobalContext};  


