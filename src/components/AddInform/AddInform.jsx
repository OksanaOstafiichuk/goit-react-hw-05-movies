import { useLocation } from 'react-router-dom';

import { AddList, AddTitle } from './AddInform.styled';
import { StyledLink } from '../Navigation/Navigation.styled';

export const AddInform = () => {
  const location = useLocation();

  return (
    <>
      <AddTitle>Additional information</AddTitle>
      <AddList>
        <li>
          <StyledLink to="cast" state={{ from: location?.state?.from }}>
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink to="reviews" state={{ from: location?.state?.from }}>
            Reviews
          </StyledLink>
        </li>
      </AddList>
    </>
  );
};
