import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Container } from '../Container/Container.styled';
export const Nav = styled.nav`
  font-family: 'Lato_Regular';
  font-size: 18px;
  line-height: 1.5;
  ${({ theme }) => theme.device.mobileMax} {
    padding: 32px;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;

    transform: translateX(-100%);
    background-color: #d9f0f7;
    transition: transform 0.3s ease-out, opacity 0.3s ease-out,
      visibility 0.3s ease-out;
    &.active {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    }
  }
  ${({ theme }) => theme.device.tablet} {
    margin-right: auto;
  }
`;
export const NavList = styled.ul`
  ${({ theme }) => theme.device.tablet} {
    display: flex;
    align-items: center;
  }
  /* ${({ theme }) => theme.device.mobileMax} {
    padding: 32px;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    transform: translateX(-100%);
    background-color: #d9f0f7;
    transition: transform 0.3s ease-out, opacity 0.3s ease-out,
      visibility 0.3s ease-out;
    &.active {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    }
  } */
`;
export const Link = styled(NavLink)`
  font-family: 'Lato_Regular';
  color: ${({ theme }) => theme.colors.dark};
  font-size: 14px;
  line-height: 1.5;
  &.active {
    color: ${({ theme }) => theme.colors.tomato};
  }
`;

export const LogoLink = styled(NavLink)`
  ${({ theme }) => theme.device.mobileMax} {
    margin: 0 auto;
  }
`;

export const NavItem = styled.li`
  ${({ theme }) => theme.device.mobileMax} {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  ${({ theme }) => theme.device.tablet} {
    &:not(:last-child) {
      margin-right: 55px;
    }
  }
`;
export const Header = styled.header`
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  z-index: 1;
  border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
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
export const HeaderContainer = styled(Container)`
  ${({ theme }) => theme.device.tablet} {
    display: flex;
    align-items: center;
  }
`;

export const HeaderBox = styled.div`
  ${({ theme }) => theme.device.mobileMax} {
    display: flex;
  }
  ${({ theme }) => theme.device.tablet} {
    display: flex;
    align-items: center;
    margin-right: 151px;
  }
`;
