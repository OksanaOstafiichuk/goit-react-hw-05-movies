import axios from "axios";

const API_KEY = '62788155badfe8d58c3d1f91f78357af';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = () => {
    const response = axios.get(`/trending/all/day?api_key=${API_KEY}`)
    return response;
}


//query - добавляти динамічно, подивитися чи є український переклад фільмів = uk
export const fetchMoviesByName = () => {
    const response = axios.get(`/search/movie?api_key=${API_KEY}&query='titanic'&language=en-US&page=1&include_adult=false`)
    return response;
}


// 414906
export const fetchMoviesById = () => {
    const response = axios.get(`/movie/414906?api_key=${API_KEY}&language=en-US`)
    return response;
}

export const fetchCast = () => {
    const response = axios.get(`/movie/414906/credits?api_key=${API_KEY}&language=en-US`)
    return response;
}

