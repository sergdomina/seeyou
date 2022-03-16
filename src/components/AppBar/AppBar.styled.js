import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  font-family: 'Lato_Regular';
  font-size: 18px;
  line-height: 1.5;

  /* ${({ theme }) => theme.device.mobileMax} {
    padding: 32px;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;

    transform: translateY(-100%);
    background-color: #d9f0f7;
    transition: transform 3s ease-out, opacity 3s ease-out,
      visibility 3s ease-out;
    &.active {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  } */
`;
export const NavList = styled.ul`
  ${({ theme }) => theme.device.mobileMax} {
    padding: 32px;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    transform: translateY(-100%);
    background-color: #d9f0f7;
    transition: transform 3s ease-out, opacity 3s ease-out,
      visibility 3s ease-out;
    &.active {
      visibility: visible;
      opacity: 1;
      transform: translateY(8%);
    }
  }
`;
export const Link = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;
export const NavItem = styled.li`
  ${({ theme }) => theme.device.mobile} {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;
export const Header = styled.header`
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  z-index: 1;
  ${({ theme }) => theme.device.desktop} {
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const LogoImg = styled.img`
  width: 99px;
  height: 20px;
  ${({ theme }) => theme.device.desktop} {
    width: 164px;
    height: 35px;
  }
`;
export const HeaderContainer = styled.div`
  ${({ theme }) => theme.device.mobileMax} {
    width: 100vw;
    background: red;
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    padding: 12px 0 12px 0;
  }
`;

export const HeaderBox = styled.div`
  ${({ theme }) => theme.device.mobileMax} {
    display: flex;
  }
`;
