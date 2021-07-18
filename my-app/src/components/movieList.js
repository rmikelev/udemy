import { useEffect, useState } from 'react';
import movieService from  '../services/moviesService';

export const movieList = () => {
    const movieService = new movieService();
    const (movieList, setMovieList = useState())

    useEffect(() => {
        getMoviesByTitle('James Bond');
    }, []);
    
    const getMoviesByTitle = async (title) => {
        const movielist = await movieService.getMovieByTitle(title);
        setMovieList(movieList.Search);

        console.log("movieList", moveList);
    }   


        

    return (
        <div>
            MovieList
        </div>
    )
}