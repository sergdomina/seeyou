import styled from 'styled-components';
import Container from '../../Container';
import bcg from 'image/hero/hero_bg.svg';
// import DownloadLink from '../DownloadLink';

export const HeroSection = styled.section`
  margin-top: -75px;
  padding-top: 100px;
  padding-bottom: 250px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${bcg});
`;
export const HeroImg = styled.img`
  margin-top: 80px;
`
export const HeroContainer = styled(Container)`

  ${({ theme }) => theme.device.desktop} {
    width: 1270px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    flex-direction: row-reverse;
  }
`;

export const HeroBox = styled.div`
  text-align: center;
  ${({ theme }) => theme.device.desktop} {
    width: 475px;
    text-align: left;
  }
`;

export const HeroThumb = styled.div`
    width: 343px;
    text-align: center;
    margin: 0 auto;
    ${({ theme }) => theme.device.tablet} {
    width: 618px;
    text-align: center;
    }
    ${({ theme }) => theme.device.default} {
    width: 600px;
    }
    ${({ theme }) => theme.device.desktop} {
    width: 724px;
    } ;
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 30px;
  line-height: 1.2;
  margin-bottom: 32px;
  margin-top: 32px;
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.desktop} {
    font-size: 45px;
    line-height: 1.2;
    margin-bottom: 32px;
    margin-top: 163px;
  }
`;

export const HeroDiscription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 14px;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.primaryText};

  ${({ theme }) => theme.device.desktop} {
    font-size: 20px;
    line-height: 1.35;

    margin-bottom: 32px;
  }
`;

export const HeroLink = styled.button`
  border: 2px solid #303030;
  border-radius: 4px;
  padding: 14px 54px;
`;
