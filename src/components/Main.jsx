import { useGlobalContext } from "../context/globalContext";
import Flag from "react-world-flags";
import { FaStar, FaRegStar } from "react-icons/fa";

function Main() {
    const {movies, series} = useGlobalContext();

    const getStars = (vote) => {
        // Trasformo il voto decimale in un valore da 1 a 5 stelle arrotondando per eccesso
        const stars = Math.ceil(vote / 2); 
        const result = [];
        
        for (let i = 0; i < 5; i++) {  //true (piena) o false (vuota) per ogni stella
            result.push(i < stars);  //true se i < stars, altrimenti false
        }
        
        return result;
    }; 

    return(
        <main>
            
            <h3>Film</h3>
            <ul>
                {movies.map((movie, index) => {
                    const flagCode = movie.original_language;
                    const imageUrl = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
                    const stars = getStars(movie.vote_average);

                    return (
                        <li key={index}>
                            <img src={imageUrl} alt={movie.title} />
                            <h4>{movie.title}</h4>
                            <p>
                                {movie.vote_average} - {movie.release_date} - 
                                <Flag code={flagCode} style={{ width: 24, height: 16, marginLeft: 8 }} />
                            </p>
                            <div>
                                 {stars.map((star, starIndex) => (
                                    <span key={starIndex} style={{ color: "gold" }}>
                                        {star ? <FaStar /> : <FaRegStar />}
                                    </span>
                                ))}
                            </div>
                        </li>
                    );
                })}
            </ul>

            <h3>Serie TV</h3>
            <ul>
                {series.map((serie, index) => {
                    const flagCode = serie.original_language;
                    const imageUrl = `https://image.tmdb.org/t/p/w342${serie.poster_path}`;
                    const stars = getStars(serie.vote_average);

                    return (
                        <li key={index}>
                            <img src={imageUrl} alt={serie.name} />
                            <h4>{serie.name}</h4>
                            <p>
                                {serie.vote_average} - {serie.first_air_date} - 
                                <Flag code={flagCode} style={{ width: 24, height: 16, marginLeft: 8 }} />
                            </p>
                            <div>
                                {stars.map((star, starIndex) => (
                                    <span key={starIndex} style={{ color: "gold" }}>
                                        {star ? <FaStar /> : <FaRegStar />}
                                    </span>
                                ))}
                                
                            </div>
                        </li>
                    );
                })}
            </ul>
        </main>

    )
}

export default Main;