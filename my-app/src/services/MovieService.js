import axios from 'axios';
const apiKey = '379060c8';
const searchService = 'https://www.omdbapi.com/';

export default class MovieService {
    async getMovieById(id) {
        return axios.get(`${searchService}?i=${id}&apikey=${apiKey}`)
                .then((res) => res.data)      
                .catch((err) => console.error(err));       
    }
    async getMovieByTitle(title, page = 1) {
        return axios.get(`${searchService}?s=${title}&page=${page}&apikey=${apiKey}`)
                .then((res) => res.data)      
                .catch((err) => console.error(err));       
    }
}



