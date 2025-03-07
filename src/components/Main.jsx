import { useGlobalContext } from "../context/globalContext";

function Main() {
    const {movies, series} = useGlobalContext();
    return(
        <main>
            <h3>Film</h3>
            <ul>
                {movies.map((movie, index) => {
                    return <li key={index}>{movie.title} - {movie.vote_average} - {movie.release_date} - {movie.original_language}</li>
                })}
            </ul>
            <h3>Serie TV</h3>
            <ul>
                {series.map((serie, index) => {
                    return <li key={index}>{serie.name}</li>
                })}
            </ul>
        </main>
        

    )
}

export default Main;