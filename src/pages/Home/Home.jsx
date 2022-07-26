import * as API from '../../service/api-service';

export const Home = () => {
  API.fetchTrendingMovies().then(({ data }) => console.log(data.results));

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};
