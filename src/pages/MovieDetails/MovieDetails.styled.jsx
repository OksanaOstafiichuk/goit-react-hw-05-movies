import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 20px 30px;
`;

export const LinkBtn = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 4px 12px;
  background-color: inherit;
  border: 1px solid #000;
  border-radius: 5px;
  color: #000;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #ff6b01;
    border: 1px solid #ff6b01;
    color: #fff;
  }
`;
