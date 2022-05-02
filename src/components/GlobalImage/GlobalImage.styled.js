import styled from 'styled-components';

export const ImageThumb = styled.div`
width: 343px;
text-align: center;
margin: 0 auto;
padding-top: 32px;
padding-bottom: 32px;
${({ theme }) => theme.device.tablet} {
width: 618px;
text-align: center;
}
${({ theme }) => theme.device.default} {
width: 416px;
text-align: left;
padding-right: 20px;
}
${({ theme }) => theme.device.desktop} {
width: 570px;
text-align: left;
padding-right: 30px;
} ;
`

