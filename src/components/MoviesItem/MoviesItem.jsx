export const MoviesItem = ({ movieDetails }) => {
  const { poster_path, original_title, overview, genres, vote_average } =
    movieDetails;
  console.log(movieDetails);
  const genresAll = () => {
    if (genres) {
      return genres
        .map(el => {
          return el.name;
        })
        .join(', ');
    } else {
      return 'genres are not defined.';
    }
  };

  const poster = () => {
    if (poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    } else {
      return `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_wGA4J08YoSd2-aTz9OQrZeSA2fnZxEbOA&usqp=CAU`;
    }
  };

  return (
    <div>
      <img src={poster()} alt={original_title} />
      <div>
        <h2>{original_title}</h2>
        <p>User Score {vote_average}</p>
        <p>
          <span>Overview</span>
          {overview}
        </p>
        <p>
          <span>Genres: </span>
          {genresAll()}
        </p>
      </div>
    </div>
  );
};
