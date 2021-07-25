export default class UserMovieListService {
    addMovieToList(movie) {
        let movieList = localStorage.getItem('movieList');

        if(movieList) {
            movieList= JSON.parse(movieList);
            movieList.list.push(movie);
        }

        if(!movieList) movieList = {list: [movie]};

        localStorage.setItem('movieList', JSON.stringify(movieList));
    }
    getMovieList() {
        let movieList=localStorage.getItem('movieList');
        if(!movieList) return null;

        return JSON.parse(movieList);
    }
}
