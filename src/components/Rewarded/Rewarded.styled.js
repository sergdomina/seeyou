import styled from 'styled-components';
import Container from '../Container';

export const RewardedTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 30px;
  line-height: 1.5;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black};
`;

export const RewardedThumb = styled.div`
  width: 271px;
  height: 238px;
  border-radius: 13px;
  margin: 0 auto;
  margin-bottom: 40px;
  background: ${({ theme }) => theme.colors.blue};
`;
export const RewardedDiscription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 32px;
`;

export const RewardedContainer = styled(Container)`
  ${({ theme }) => theme.device.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
