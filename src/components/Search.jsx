import { useState } from "react";
import { useGlobalContext } from "../context/globalContext";   

function Search(){
    const {handleSubmit, search, setSearch} = useGlobalContext();
    
    //const [search, setSearch] = useState("");

    /*const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
    }*/

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Cerca qui" onChange={ e => setSearch(e.target.value)} />
            <button type="submit">Cerca</button>
        </form>
    )
}

export default Search;