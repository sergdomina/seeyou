import styled from 'styled-components';

export const ImageThumb = styled.div`
  width: 271px;
  height: 238px;
  background: ${({ theme }) => theme.colors.blue};
  border-radius: 13px;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 40px;
  ${({ theme }) => theme.device.desktop} {
    width: 570px;
    height: 500px;
    margin: 0;
  }
`;
