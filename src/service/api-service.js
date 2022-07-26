import axios from "axios";

const API_KEY = '62788155badfe8d58c3d1f91f78357af';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export const fetchTrendingMovies = () => {
    const response = axios.get(`/3/trending/all/day?api_key=${API_KEY}`)
    return response;
}

