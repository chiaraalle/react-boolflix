import { createContext, useState, useContext, useEffect } from "react"; 

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
    const apiKey= import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_API_URL;

    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
        //chiamata api movie
        fetch(`${apiUrl}movie?api_key=${apiKey}&query=${search}&language=it_IT`) //https://api.themoviedb.org/3/search/movie?api_key=5e3c5f8f4e3b7d4b5a4c1e7d1e1f9f3e&query=${search}
        .then(response => response.json())
        .then(data => {
            setMovies(data.results);
            console.log("Film:", data.results);
        })
        .catch(error => console.log(error))

        //chiamata api serie
        fetch(`${apiUrl}tv?api_key=${apiKey}&query=${search}&language=it_IT`)
        .then(response => response.json())
        .then(data => {
            setSeries(data.results);
            console.log("Serie TV:", data.results);
        })
        .catch(error => console.log(error))

        setSearch("");
    }
 
    useEffect(() => {
        console.log("dati dei film:" + movies);
        console.log("dati delle serie:" + series);
        console.log("apikey:" + apiKey);
        console.log("apiUrl:" + apiUrl);
     }, [movies, series])

    const value = {
        search,
        setSearch,
        handleSubmit,
        movies,
        series
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext);

export {GlobalProvider, useGlobalContext};  


