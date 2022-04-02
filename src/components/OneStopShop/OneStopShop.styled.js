import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 0px 80px;
`;

export const SubTitle = styled.h3`
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

  ${({ theme }) => theme.device.desktop} {
  }
`;

export const DiscriptionWithMargin = styled(Discription)`
  margin-bottom: 27px;
`;

export const Box = styled.div`
  ${({ theme }) => theme.device.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
