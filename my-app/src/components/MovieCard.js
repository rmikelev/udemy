import Button from "react-bootstrap/Button";
// import StyledButtonContainer from "./styled";

export const MovieCard = ({ movie, setSelectedMovie, onAddToMovieList, onDeleteClick }) => {
    return(
        <div>
                            
        <img src= {movie.Poster} alt={`${movie.Title} poster`} />
                <div>
                    <h4>{movie.Title}</h4>   
      
                <Button btn-primary
                        onClick={() => setSelectedMovie(movie.imdbID)}
                    >Show Details</Button>
                    {onAddToMovieList && 
                <Button btn-success
                    onClick={() => onAddToMovieList(movie.imdbID)}
                    >Add Movie To My List</Button>
                    }
                {
                onDeleteClick &&
                    <Button
                        variant="danger"
                        onClick={() => onDeleteClick(movie.imdbID)}
                    >Remove From List</Button>
                }


    
                     

                   
                 </div>    
            </div>  
    )
}
export default MovieCard;