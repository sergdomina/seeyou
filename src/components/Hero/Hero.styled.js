import styled from 'styled-components';
import Container from '../Container';
// import DownloadLink from '../DownloadLink';


export const HeroSection = styled.section`
  padding: 151px 0px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

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
  ${({ theme }) => theme.device.desktop} {
    width: 746px;
    height: 465px;
    margin-right: -50px;
  }
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 45px;
  line-height: 1.2;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black_btn};
`;

export const HeroDiscription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 20px;
  line-height: 27px;
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
