import { useState } from "react";
import { useGlobalContext } from "../context/globalContext";   

function Search(){
    const {handleSubmit, search, setSearch} = useGlobalContext();

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Cerca qui" onChange={ e => setSearch(e.target.value)} />
            <button type="submit">Cerca</button>
        </form>
    )
}

export default Search;