import styled from 'styled-components';
import Container from '../Container';
import DownloadLink from '../DownloadLink';

export const HeroSection = styled.section`
  padding-top: 21px;
  padding-bottom: 28px;
  background: ${({ theme }) => theme.colors.body_bg};
`;
export const HeroTitle = styled.h1`
  font-family: 'Jost';
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
  font-family: 'Open Sans';
  font-size: 14px;
  line-height: 150%;

  color: ${({ theme }) => theme.colors.primaryText};
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 32px;
  }
`;

export const HeroContainer = styled(Container)`
  ${({ theme }) => theme.device.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;
export const HeroBox = styled.div`
  text-align: center;
  ${({ theme }) => theme.device.desktop} {
    width: 376px;
    text-align: left;
  }
`;
export const HeroLink = styled(DownloadLink)`
  padding: 14px 54px;
`;
