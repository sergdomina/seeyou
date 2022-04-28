import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// const DownloadLink = styled(NavLink)`
//   font-family: ${({ theme }) => theme.fonts.descr.semiBold};
//   padding: 15px 84px;
//   border-radius: 4px;
//   color: ${({ theme }) => theme.colors.white};
//   background: ${({ theme }) => theme.colors.black_btn};
// `;
// export default DownloadLink;

const DownloadLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.descr.semiBold};
  padding: 14px 46px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.device.desktop} {
    padding: 15px 84px;
  }
`;
export default DownloadLink;
