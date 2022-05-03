import styled from 'styled-components';

export const ImageThumb = styled.div`
width: 343px;
text-align: center;
margin: 0 auto;

${({ theme }) => theme.device.tablet} {
width: 380px;
text-align: center;
}
${({ theme }) => theme.device.default} {
width: 416px;
padding-right: 20px;
}
${({ theme }) => theme.device.desktop} {
width: 570px;
padding-right: 30px;
} ;
`

