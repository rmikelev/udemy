import { useEffect, useState } from "react";
import UserMovieListService from "../services/userMovieList.service";
import MovieCard from "./MovieCard"
import MovieModal from "./MovieModal";


export const UserMovieList = () => {
    const userMovieListService = new UserMovieListService();
    const [userMovieList, setUserMovieList] = useState();
    const [selectedMovie, setSelectedMovie] = useState();

    useEffect(() => {
       getMovieList();

    }, [])

    const getMovieList = async () => {
        const movieList =await userMovieListService.getMovieList();
        if (movieList) return setUserMovieList(movieList.list)
    }

        const deleteMovieFromList = (id) => {
            userMovieListService.removeMovieFromList(id);
            getMovieList()
        }
    return(
        <div>
            <h1>User Movie List</h1>
            {! userMovieList && 
            <p>No Movies Available</p>
            }
            { userMovieList && userMovieList.map((movie) => {
                return (
                    <MovieCard movie={movie} setSelectedMovie={setSelectedMovie} onDeleteClick={deleteMovieFromList}/>
                )
            })}

        </div>
        
    )
        // const deleteMovieFromList = (id) => {
        //     userMovieListService.removeMovieFromList(id);
        //     setUserMovieList();
        //     onCloseDelete();
        // }
//     return(
//         <div>
//             <MovieListContainer>
     
//                {
//                     movieData.movieList && movieData.movieList.list.map((movie) => ( 
//                 <MovieCard movie={movie} updateMovieData={updateMovieData} onDeleteClick={deleteMovieFromList}/>
//     )
//                     )
                    
            
//     //         </MovieListContainer>
//     //         <Modal show={!!movieData.selectedMovie} onClose={() => updateMovieData('selectedMovie', null)}>
//     //             <MovieDetails id={movieData.selectedMovie} />
//     //         </Modal>

//         </div>
//     );
};
export default UserMovieList;