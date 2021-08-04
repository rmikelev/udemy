import React, { useState } from 'react';
import  MovieDetails  from './MovieDetails';
import MovieModal from './MovieModal';
import MovieService  from  '../services/MovieService';
import  SearchBar  from './SearchBar';
import MovieCard from './MovieCard';
import UserMovieListService from '../services/userMovieList.service';
import Pagination from '../components/Pagination';
// import MovieListContainer from '../css/styled';

export const MovieList = () => {
    const movieService = new MovieService();
    const userMovieListService = new UserMovieListService();
    const [selectedMovie, setSelectedMovie] = useState();
    const [movieList, setMovieList] = useState();
    const [pageCount, setPageCount] = useState();
    const [movieTitle, setMovieTitle] = useState();
    const [currentPage, setCurrentPage] = useState();
    
    const onAddToMovieList = async(movie) => {
        await userMovieListService.addMovieToList(movie)
    }
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
    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            { !selectedMovie && movieList && 
                <div>
                    {
                     movieList.map((movie) => {
                        return(  
                            <MovieCard movie={movie} setSelectedMovie={setSelectedMovie} onAddToMovieList ={() => onAddToMovieList(movie)}/>                               
                    )                                                          
                })                                                              
        }
        { pageCount && 
            <Pagination pageCount = {pageCount} getMoviesByPage={getMoviesByPage} currentPage= {currentPage}/>            
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