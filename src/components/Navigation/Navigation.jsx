import { Navigate, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Navigate>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="movies">Movies</StyledLink>
    </Navigate>
  );
};
