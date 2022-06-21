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
  ${({ theme }) => theme.device.default} {
    padding-top: 180px;
    padding-bottom: 120px;
  }
`;
export const HeroImg = styled.img`

`
export const HeroContainer = styled(Container)`

  ${({ theme }) => theme.device.tablet} {
    width: 618px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    flex-direction: row-reverse;
  }
  ${({ theme }) => theme.device.default} {
    width: 806px;
    
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
  padding-right: 8px;
  padding-left: 8px;
  text-align: left;
  ${({ theme }) => theme.device.tablet} {
    padding-right: 0px;
    padding-left: 0px;
    width: 309px;
    margin: 0 auto;
    
  }
  ${({ theme }) => theme.device.default} {
    width: 416px;
    text-align: left;
    padding-right: 10px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 570px;
    text-align: left;
    padding-right: 15px;
  } ;


`;
export const HeroThumb = styled.div`
    width: auto;
    margin: 0 auto;
    margin-bottom: 32px;
    ${({ theme }) => theme.device.tablet} {
    width: 309px;
    }
    ${({ theme }) => theme.device.default} {
    width: 500px;
    }
    ${({ theme }) => theme.device.desktop} {
    width: 654px;
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
    font-size: 26px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 30px;
    margin-bottom: 32px;
    margin-top: 30px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 45px;
    margin-bottom: 32px;
  }
`;

export const HeroDiscription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 14px;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 32px;
  ${({ theme }) => theme.device.tablet} {
    font-size: 14px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 16px;
    margin-bottom: 70px;
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
