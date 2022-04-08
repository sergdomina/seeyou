import styled from 'styled-components';
import Container from '../../Container';

export const SupportSection = styled.section`
  padding-top: 20px;
  padding-bottom: 29px;
  background: ${({ theme }) => theme.colors.placeholder};
  ${({ theme }) => theme.device.desktop} {
    padding-top: 45px;
    padding-bottom: 45px;
  }
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
export const SupportUl =styled.ul`
  margin: 0 auto;
`
export const SupportLi = styled.li`
${({ theme }) => theme.device.desktop} {
  padding-bottom: 20px;
}
`
export const BoxIMG = styled.div`
  text-align: center;
  ${({ theme }) => theme.device.desktop} {
    width: 200px;
    text-align: right;
  }
`;

export const Discription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 20px;
  line-height: 1.35;

  color: ${({ theme }) => theme.colors.privacy_bg};
`;
export const Discriptionltd = styled.p`
  padding-top: 46px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.35px;

  color: ${({ theme }) => theme.colors.privacy_bg};
`;

export const DiscriptionWithMargin = styled(Discription)`
  margin-bottom: 20px;
`;
