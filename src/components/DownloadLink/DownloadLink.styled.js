import styled from 'styled-components';

const DownloadLink = styled.a`
  font-family: 'Poppins_SemiBold';
  padding: 15px 84px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black_btn};
`;
export default DownloadLink;
