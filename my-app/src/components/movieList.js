import { useEffect, useState } from 'react';
import MoviesService  from  '../services/moviesService';
import {movieDetails} from '../components/movieDetails';
import { movieSearch } from '../components/movieSearch';
import { movieModal }  from './movieModal';
import { SearchBar } from './SearchBar';
import { selectSeries } from 'async';


export const MovieList = () => {
    const moviesService = new MoviesService();
    const [selectedMovies, setSelectedMovies] = useState();
    const [movieList, setMovieList] = useState();
    
    useEffect(() => {
        getMoviesByTitle('Bond');
    }, []);
    
    const getMoviesByTitle = async (title) => {
        const movieList = await moviesService.getMovieByTitle(title);

        setMovieList(movieList.Search);

    }          
    const onClose = () => setSelectedMovie(null);

    const onSearch = (title) => {
        console.log(title);
    }

    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            {
                !selectedMovie && movieList && movieList.map((movie) => {
                    return(
                        <div>
                        <img src= {movie.Poster} alt={'${movie.Title} poster'} />
                        <div>
                            <h5>{movie.Title}</h5>   
                            <button 
                                onClick={() => setSelectedMovie(movie.imdbID)}
                            >Show Details</button>
                        
                        </div>
                    
                    </div>
                     
                                            
                   
                )        
            })                            
        }
        {
            selectedMovie && (
                <movieModal show={selectedMovie} onClose={onClose}>
                    <MovieDetails id={selectedMovie} />
                </movieModal>
            )
        }
        </div>
    )
        }

            
 
    
