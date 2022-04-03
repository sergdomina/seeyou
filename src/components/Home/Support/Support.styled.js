import styled from 'styled-components';
import Container from '../../Container';

export const SupportSection = styled.section`
  padding-top: 20px;
  padding-bottom: 29px;
  background: ${({ theme }) => theme.colors.placeholder};
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.semiBold};
  font-size: 30px;
  line-height: 1.43;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

export const SupportContainer = styled(Container)`
  ${({ theme }) => theme.device.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Box = styled.div`
  text-align: center;
  ${({ theme }) => theme.device.desktop} {
    width: 759px;
    text-align: left;
  }
`;

export const Discription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 20px;
  line-height: 1.35;

  color: ${({ theme }) => theme.colors.privacy_bg};
`;

export const DiscriptionWithMargin = styled(Discription)`
  margin-bottom: 20px;
`;
