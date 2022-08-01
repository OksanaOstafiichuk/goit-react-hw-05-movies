import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-right: calc(-1 * 16px);
  margin-bottom: calc(-1 * 32px);
`;

export const Item = styled.li`
  flex-basis: calc(100% / 3 - 16px);
  margin-bottom: 52px;
  margin-right: 16px;
  max-width: 200px;

  &:hover {
    box-shadow: rgba(26, 7, 22, 0.267) 0px 2px 10px 0px;
    border-radius: 5px;
    transition-duration: $transition-time;
    transition-timing-function: $cubic;
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

export const Title = styled.p`
  margin: 8px 0;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
`;
