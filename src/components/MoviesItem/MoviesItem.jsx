export const MoviesItem = ({ movieDetails }) => {
  const { poster_path, original_title, overview, genres, vote_average } =
    movieDetails;
  console.log(genres);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      />
      <div>
        <h2>{original_title}</h2>
        <p>User Score {vote_average}</p>
        <p>
          <span>Overview</span>
          {overview}
        </p>
        <p>
          <span>Genres</span>
          {/* {genres} */}
        </p>
      </div>
    </div>
  );
};
