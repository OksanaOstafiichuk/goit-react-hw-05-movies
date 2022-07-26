import * as API from '../../service/api-service';

export const Home = () => {
  // API.fetchTrendingMovies().then(response => console.log(response));
  // API.fetchMoviesByName().then(({ data }) => console.log(data.results));
  API.fetchMoviesById().then(({ data }) => console.log(data));

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};
