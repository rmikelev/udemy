import { useEffect, useState } from "react";
import UserMovieListService from "../services/userMovieList.service";

const UserMovieList = () => {
    const userMovieListService = new UserMovieListService();
    const [userMovieList, setUserMovieList] = useState([]);

    useEffect(() => {
        const getMovieList = async () => {
        const movieList =await userMovieListService.getMovieList();
        setUserMovieList(movieList.list)
        }
       getMovieList();

    }, [setUserMovieList, userMovieListService])

    return(
        <div>
            <h1>User Movie List</h1>
            { userMovieList }
        </div>
        
    )
}
export default UserMovieList;