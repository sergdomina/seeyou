import styled from 'styled-components';
import Container from '../../Container';

export const Section = styled.section`
  padding: 69px 0px 80px;
`;

export const ToolbarContainer = styled(Container)`
  ${({ theme }) => theme.device.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Img = styled.img`
  width: 271px;
  height: 238px;

  ${({ theme }) => theme.device.desktop} {
    width: 265px;
    height: 207px;
  }
`;
export const Box = styled.div`
  ${({ theme }) => theme.device.desktop} {
    width: 663px;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.semiBold};
  font-size: 45px;
  line-height: 1.22;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black_btn};
`;

export const Discription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 20px;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.black_btn};
`;

export const ToolbarThumb = styled.div`
  ${({ theme }) => theme.device.desktop} {
    margin: 0 auto;
    margin-top: 63px;
    width: 1138px;
  }
`;
