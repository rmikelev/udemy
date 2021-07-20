import { useEffect, useState } from 'react';
import {MoviesService} from  '../services/moviesService';
import {movieDetails} from '../components/movieDetails';
import {movieSearch}  '../components/movieSearch';
import {movieModal}  from './movieModal';
import { selectSeries } from 'async';


export const MovieList = () => {
    const moviesService = new MoviesService();
    const [selectedMovies, setSelectedMovies] =useState();
    const [movieList, setMovieList] = useState();
    

    useEffect(() => {
        getMoviesByTitle('Bond');
    }, []);
    
    const getMoviesByTitle = async (title) => {
        const movieList = await moviesService.getMovieByTitle(title);

        setMovieList(movieList.Search);

    }          
    const onClose = () => setSelectedMovie(null);

    return (
        <div>
            {
            !selecctMovie && movieList && movieList.map((movie) => {
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
        </div>
    )
        }

            
 
    
