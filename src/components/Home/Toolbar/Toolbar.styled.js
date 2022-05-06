import styled from 'styled-components';
import Container from '../../Container';

export const Section = styled.section`
  padding: 30px 0px 40px;
  ${({ theme }) => theme.device.tablet} {
    padding: 40px 0px 40px;
  }
  ${({ theme }) => theme.device.default} {
    padding: 50px 0px 50px;
  }
  ${({ theme }) => theme.device.desktop} {
    padding: 60px 0px 70px;
  }
`;

export const ToolbarContainer = styled(Container)`
  ${({ theme }) => theme.device.tablet} {
    width: 608px;
  }
  ${({ theme }) => theme.device.default} {
    display: flex;
    align-items: start;
    justify-content: space-between;
    width: 805px;
    align-items: top;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 1140px;
  }
`;

export const DivImage = styled.div`
  margin: 0 auto;
  width: 271px;
  height: 238px;

  ${({ theme }) => theme.device.default} {
    width: 270px;
    height: 233px;
  }
  ${({ theme }) => theme.device.desktop} {
  }
`;
export const Img = styled.img`
  margin: 0 auto;
  width: 271px;
  height: 238px;

  ${({ theme }) => theme.device.default} {
    width: 200px;
    height: 178px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 233px;
    height: 207px;
  }
`;

export const Box = styled.div`
  ${({ theme }) => theme.device.default} {
    width: 538px;
    margin-top: 0;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 663px;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 25px;
  line-height: 1.2;
  margin-bottom: 32px;
  margin-top: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    font-size: 35px;
  }
  ${({ theme }) => theme.device.default} {
    text-align: left;
    font-size: 30px;
    margin-top: 5px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 45px;
  }
`;

export const Discription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 14px;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 32px;
  text-align: center;
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 16px;
    text-align: left;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 20px;
  }
`;

export const ToolbarThumb = styled.div`
  margin: 0 auto;
  margin-top: 63px;
  width: auto;
  ${({ theme }) => theme.device.mobileMax} {
    /* width: 618px; */
    /* max-width: 578px; */
    overflow-x: scroll;

    & img {
      /* overflow-x: scroll; */
      max-width: 578px;
    }
  }
  ${({ theme }) => theme.device.default} {
    width: 618px;
  }
  ${({ theme }) => theme.device.default} {
    width: 723px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 742px;
  }
`;
