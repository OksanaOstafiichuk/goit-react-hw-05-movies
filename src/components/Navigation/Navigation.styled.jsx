import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigate = styled.div`
  padding: 40px 0;
  margin: 0 30px;
  display: flex;
`;

export const StyledLink = styled(NavLink)`
  margin-right: 15px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  color: #000;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.172;
  transition-property: color;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #ff6b08;
  }

  &.active:after {
    content: '';
    display: block;
    position: relative;
    top: 2px;
    bottom: -1px;
    width: 100%;
    height: 3px;
    background-color: #ff6b08;
    border-radius: 2px;
  }
`;
