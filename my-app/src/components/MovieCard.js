
const MovieCard = ({movie, setSelectedMovie, onAddToMovieList}) => {
    return(
        <div>
                            
        <img src= {movie.Poster} alt={`${movie.Title} poster`} />
                <div>
                    <h5>{movie.Title}</h5>   
                    <button 
                        onClick={() => setSelectedMovie(movie.imdbID)}
                    >Show Details</button>
                    {onAddToMovieList && 
                    <button 
                    onClick={() => onAddToMovieList(movie.imdbID)}
                    >Add Movie</button>
                    } 
                 </div>    
            </div>  
    )
}
export default MovieCard;