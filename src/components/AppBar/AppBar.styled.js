import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  font-family: 'Lato_Regular';
  font-size: 18px;
  line-height: 1.5;
`;
export const Link = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;
