import styled from 'styled-components';
import Container from '../../Container';
import bcg from 'image/hero/hero_bg.svg';
// import DownloadLink from '../DownloadLink';

export const HeroSection = styled.section`
  padding-top: 100px;
  padding-bottom: 50px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${bcg});
  ${({ theme }) => theme.device.desktop} {
    padding-top: 100px;
    padding-bottom: 250px;
  }
`;
export const HeroImg = styled.img`

`
export const HeroContainer = styled(Container)`

  ${({ theme }) => theme.device.default} {
    width: 806px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    flex-direction: row-reverse;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 1140px;
  }
`;

export const HeroBox = styled.div`
  text-align: center;
  ${({ theme }) => theme.device.desktop} {
    width: 475px;
    text-align: left;
  }
`;
export const GlobalBox = styled.div`

  text-align: center;
  ${({ theme }) => theme.device.tablet} {
    width: 618px;
    margin: 0 auto;
    text-align: center;
  }
  ${({ theme }) => theme.device.default} {
    width: 416px;
    text-align: left;
    padding-right: 5px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 570px;
    text-align: left;
    padding-right: 10px;
  } ;
`;
export const HeroThumb = styled.div`
    width: auto;
    margin: 0 auto;
    margin-bottom: 32px;
    ${({ theme }) => theme.device.tablet} {
    width: 618px;
    }
    ${({ theme }) => theme.device.default} {
    width: 402px;
    }
    ${({ theme }) => theme.device.desktop} {
    width: 724px;
    } ;
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 25px;
  line-height: 1.2;
  margin-bottom: 32px;
  margin-top: 32px;
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    font-size: 35px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 30px;
    margin-bottom: 32px;
    margin-top: 133px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 45px;
    margin-bottom: 32px;
    margin-top: 163px;
  }
`;

export const HeroDiscription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 14px;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 32px;
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 20px;
    
  }
`;

export const HeroLink = styled.button`
  border: 2px solid #303030;
  border-radius: 4px;
  padding: 14px 54px;
`;
