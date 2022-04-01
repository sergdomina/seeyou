import styled from 'styled-components';
import Container from '../Container';
import DownloadLink from '../DownloadLink';

export const HeroSection = styled.section`
  padding-top: 21px;
  padding-bottom: 28px;
  background: ${({ theme }) => theme.colors.body_bg};
`;
export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-weight: 600;
  font-size: 45px;
  line-height: 1.2;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black_btn};
`;

export const HeroThumb = styled.img`
  width: 271px;
  height: 238px;
  border-radius: 13px;
  margin: 0 auto;
  margin-bottom: 40px;
  ${({ theme }) => theme.device.desktop} {
    width: 100%;
    height: 100%;
    margin: 0;
    margin-left: 40px;
    margin-right: -100px;
    transform: scale(90%);
  }
`;
export const HeroDiscription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;

  color: ${({ theme }) => theme.colors.primaryText};
  ${({ theme }) => theme.device.desktop} {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.35;
    width: 472px;
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
export const HeroLink = styled.button`
  border: 2px solid #303030;
  border-radius: 4px;
  padding: 14px 54px;
`;
