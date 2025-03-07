import { useGlobalContext } from "../context/globalContext";

function Main() {
    const {movies, series} = useGlobalContext();

    const handleStar= (vote) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < vote / 2) {
                stars.push(<i className="fas fa-star"></i>)
            } else {
                stars.push(<i className="far fa-star"></i>)
            }
        }
        return stars;
    }



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