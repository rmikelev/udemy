import React, { useEffect, useState } from 'react';
import MovieService from '../services/MovieService';

// Class based components
const MovieDetails = ({ id }) => {
  const [ movie, setMovie ] = useState();
  const movieService = new MovieService();

  useEffect(() => {
    getMovieById(id);
  }, [id]);

  const getMovieById = async (id) => {
    const movie = await movieService.getMovieById(id);
    setMovie(movie);
  }

  return movie ? (
    <div>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <div>
            <div>
                <h2>{movie.Title}</h2>
                <span>
                    { movie.Ratings[0].Value}
                    : "N/A"
                </span>
            </div>
            <div>
              <span>
              { movie.Rated}
            </span>
            <span>
              { movie.Runtime }
            </span>
            <span>
               { movie.Genre}
            </span>            
        </div>
        <div>
          <h4>Plot</h4>
          {movie.Plot}
        </div>
          <h4>Actors</h4>
          { movie.Actors}  
      </div>
    </div>
  ) : (<h2>Loading...</h2>);
  }

  export default MovieDetails;