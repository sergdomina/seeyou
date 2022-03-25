import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Container from '../Container';

export const HeroSection = styled.section`
  padding-top: 21px;
  padding-bottom: 88px;
  background: ${({ theme }) => theme.colors.body_bg};
  ${({ theme }) => theme.device.desktop} {
    padding-top: 104px;
    padding-bottom: 207px;
  }
`;
export const HeroTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 30px;
  line-height: 1.5;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black};
`;

export const HeroThumb = styled.div`
  width: 271px;
  height: 238px;
  border-radius: 13px;
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: 40px;
  background: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.device.desktop} {
    width: 600px;
    height: 427px;
    margin: 0;
  }
`;
export const HeroDiscription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 14px;
  line-height: 1.5;

  color: ${({ theme }) => theme.colors.primaryText};

  margin-bottom: 24px;

  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 32px;
  }
`;

export const HeroContainer = styled(Container)`
  margin-bottom: 57px;
  ${({ theme }) => theme.device.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    &:not(:last-child) {
      margin-bottom: 174px;
    }
    &:last-child {
      flex-direction: row;
      margin-bottom: 0;
    }
  }
`;
export const HeroBox = styled.div`
  text-align: center;

  ${({ theme }) => theme.device.desktop} {
    width: 376px;
    text-align: left;
  }
`;
export const HeroLink = styled.a`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.descr.semiBold};
  padding: 15px 84px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black_btn};
  padding: 14px 54px;
  margin-bottom: 32px;
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 68px;
  }
`;
export const HeroMobileLink = styled.a`
  display: inline-block;

  border-radius: 4px;

  margin-bottom: 32px;
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 68px;
  }
`;

export const AnotherLink = styled.a`
  text-decoration: underline;
  font-size: 20px;
  line-height: 1.5;
  font-family: ${({ theme }) => theme.fonts.descr.regular};

  color: ${({ theme }) => theme.colors.link};

  margin-bottom: 24px;
`;

export const ReleaserLink = styled(NavLink)`
  text-decoration: underline;
  font-size: 20px;
  line-height: 1.5;
  font-family: ${({ theme }) => theme.fonts.descr.regular};

  color: ${({ theme }) => theme.colors.link};

  margin-bottom: 24px;
`;
export const ReleaseItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
export const MobileItem = styled.li`
  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const ReleaseList = styled.ul`
  text-align: left;
`;
export const MobileList = styled.ul`
  display: flex;
`;
export const DesctopLink = styled.a`
  padding: 10px 37px;
  border: 1px solid black;
  border-radius: 4px;
`;
