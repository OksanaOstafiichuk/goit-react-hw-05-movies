import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-right: calc(-1 * 16px);
  margin-bottom: calc(-1 * 32px);
`;

export const CastItem = styled.li`
  flex-basis: calc(100% / 3 - 16px);
  margin-bottom: 72px;
  margin-right: 16px;
  max-width: 200px;
  max-height: 200px;
`;

export const CastImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

export const CastName = styled.h4`
  margin: 0;
`;

export const CastDesc = styled.p`
  margin: 2px 0;
`;
