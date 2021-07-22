export default class UserMovieListService {
    addMovieToList(movie) {
        let movieList = localStorage.getItem('movieList');
        if(!movieList) movieList = [Movie];

        localStorage.setItem('movieList', JSON.stringify(movieList));
    }
}