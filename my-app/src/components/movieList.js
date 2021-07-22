import React, { useState } from 'react';
import  MovieDetails  from './MovieDetails';
import MovieModal from './MovieModal';
import MovieService  from  '../services/MovieService';
import  SearchBar  from './SearchBar';
import Pagination from '../components/Pagination';

export const MovieList = () => {
    const movieService = new MovieService();
    const [selectedMovie, setSelectedMovie] = useState();
    const [movieList, setMovieList] = useState();
    const [pageCount, setPageCount] = useState();
    const [movieTitle, setMovieTitle] = useState();
    const [currentPage, setCurrentPage] = useState();
    
    
    const getMoviesByTitle = async (title) => {
        console.log(title);
        setMovieTitle(title);
        const movieList = await movieService.getMovieByTitle(title);
        console.log(movieList);
        setPageCount(Math.ceil(movieList.totalResults / 10));
        setMovieList(movieList.Search);

    } 
    
    const getMoviesByPage = async (page) => {
        setCurrentPage(page);
        const movieList = await movieService.getMovieByTitle(movieTitle, page);
        setMovieList(movieList.Search);
    }

    const onClose = () => setSelectedMovie(null);

    const onSearch = (title) => {
        console.log('onSearch')
        getMoviesByTitle(title);
       
    }

    const renderPagination = () => {
        return (
            <div>
                {
                    [...pageCount].forEach((index) => {
                        <button
                        onClick={() => this.getMoviesByPage(index + 1)}
                        disabled={index + 1 ===currentPage}
                        >{ index + 1 }</button>
                })
            }
                
        </div>
        )
    }
    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            { !selectedMovie && movieList && 
                <div>
                    {
                     movieList.map((movie) => {
                        return(
                        <div>
                    <img src= {movie.Poster} alt={`${movie.Title} poster`} />
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
            !!pageCount && (
                <div>
                    {
                      [...Array(pageCount)].map((index) => {

                          return(
                            <button
                                onClick={() => getMoviesByPage(index +1)}
                                disabled={index +1 ===currentPage}
                                >{ `${index = 1}` }</button>
                      );  
                    })
                }
            </div>
            )
        }
     </div> 
    } 
        {
            selectedMovie && (
                <MovieModal show={selectedMovie} onClose={onClose}>
                    <MovieDetails id={selectedMovie} />
                </MovieModal>
            )
        }
    </div>      
)   
}   
export default MovieList