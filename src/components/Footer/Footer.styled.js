import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Container from '../Container';
import { ReactComponent as LogoSeeYou } from 'image/full.svg';

export const FooterLogo = styled(LogoSeeYou)`
  ${({ theme }) => theme.device.mobile} {
    margin-bottom: 41px;
  }
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 28px;
  }
`;

export const Footerbox = styled.div`
  ${({ theme }) => theme.device.mobileMax} {
    margin-bottom: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ${({ theme }) => theme.device.desktop} {
    flex-basis: 50%;
  }
`;

export const FooterStyle = styled.footer`
  padding-top: 70px;
  background: ${({ theme }) => theme.colors.footer_bg};
`;

export const FooterContainer = styled(Container)`
  margin-bottom: 44px;
  ${({ theme }) => theme.device.desktop} {
    display: flex;
  }
`;

export const FooterDeskr = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.device.mobileMax} {
    text-align: center;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 20px;
  }
`;
export const FooterList = styled.div`
  ${({ theme }) => theme.device.mobileMax} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ${({ theme }) => theme.device.desktop} {
    flex-basis: 50%;
    display: flex;
    justify-content: space-around;
  }
`;

export const FooterLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.device.mobileMax} {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
  ${({ theme }) => theme.device.desktop} {
    align-items: flex-start;
    justify-content: flex-end;
  }
`;

export const FooterItem = styled.a`
  font-family: ${({ theme }) => theme.fonts.descr.bold};
  font-size: 20px;
  line-height: 1.35;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.device.mobileMax} {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
  ${({ theme }) => theme.device.desktop} {
    &:not(:nth-child(3n)) {
      margin-bottom: 24px;
    }
  }
`;

export const FooterDownload = styled.button`
  font-family: ${({ theme }) => theme.fonts.descr.bold};
  font-size: 20px;
  line-height: 1.35;

  color: ${({ theme }) => theme.colors.white};
`;
export const FooterLink = styled.a`
  font-size: 20px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.white};
`;

export const PolicyList = styled.ul`
  padding-top: 40px;
  padding-bottom: 40px;
  background: ${({ theme }) => theme.colors.black_btn};
`;

export const PolicyBox = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  background: ${({ theme }) => theme.colors.black_btn};
`;

export const Policylist = styled.ul`
  ${({ theme }) => theme.device.desktop} {
    display: flex;
  }
`;

export const PolicyItem = styled.li`
  position: relative;

  ${({ theme }) => theme.device.desktop} {
    &:not(:last-child) {
      margin-right: 30px;
      &::after {
        content: '';
        display: block;
        position: absolute;
        right: -15px;
        top: 0;
        width: 2px;
        height: 100%;
        background-color: white;
      }
    }
  }
`;
export const PolicyLink = styled(NavLink)`
  font-size: 20px;
  line-height: 2;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.device.desktop} {
    font-size: 20px;
    line-height: 1.5;
  }
`;
