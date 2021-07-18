import axios from 'axios';
const apiKey = '379060c8';

export class movieService {
    async getMovieByTitle(title) {
        return axios.get(`https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`)
                .then((res) => res.data)      
                .catch((err) => console.error(err));       
    }
}


