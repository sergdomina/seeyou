import styled from 'styled-components';

export const FormContainer = styled.div`
    padding-top: 32px;
    padding-bottom: 40px;
    margin: 100px  auto;
    width: 350px;
    background: ${({theme})=>theme.colors.white};
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    ${({ theme }) => theme.device.tablet} {
      width: 570px;
      margin: 150px  auto;
      box-shadow: 0px 11px 30px rgba(0, 0, 0, 0.2);
    }
    ${({ theme }) => theme.device.default} {
      
    }
    ${({ theme }) => theme.device.desktop} {
      
    }
`
export const ModalInput = styled.input`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  color: ${({ theme }) => theme.colors.placeholder};
  font-size: 14px;
  line-height: 1.43;
  border-bottom: 1px solid #a0a3bd;
  display: block;
  padding: 7px 0;
  width: 327px;
  margin: 0 auto;
  margin-bottom: 16px;
  ${({ theme }) => theme.device.tablet} {
    width: 482px;
  }
  ${({ theme }) => theme.device.default} {
    
  }
  ${({ theme }) => theme.device.desktop} {
    
  }
`;


export const ModalText = styled.textarea`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  color: ${({ theme }) => theme.colors.placeholder};
  font-size: 14px;
  line-height: 1.43;
  border-bottom: 1px solid #a0a3bd;
  display: block;
  padding: 7px 0;
  width: 327px;
  margin: 0 auto;
  margin-bottom: 16px;
  ${({ theme }) => theme.device.tablet} {
    width: 482px;
  }
  ${({ theme }) => theme.device.default} {
    
  }
  ${({ theme }) => theme.device.desktop} {
    
  }
`;
export const ModaButtonSend = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 40px;
  font-family: ${({ theme }) => theme.fonts.descr.semiBold};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.grey_off};
    :hover{
    background: ${({ theme }) => theme.colors.black_btn};
}
  border-radius: 4px;
  padding: 14px 46px;
  cursor: pointer;
  ${({ theme }) => theme.device.tablet} {
    padding: 14px 142px;
  }
  ${({ theme }) => theme.device.default} {
    
  }
  ${({ theme }) => theme.device.desktop} {
    
  }
`;

export const FormTitle=styled.h1`
    font-family: ${({ theme }) => theme.fonts.title.semiBold};
    font-size: 24px;
    line-height: 35px;
    text-align: center;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.colors.black_btn};
`
export const InputName=styled.p`
    font-family: ${({ theme }) => theme.fonts.descr.regular};
    font-size: 12px;
    line-height: 1.5;
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.grey_purple};
    ${({ theme }) => theme.device.tablet} {
      margin-left: 44px;
    }
    ${({ theme }) => theme.device.default} {
      
    }
    ${({ theme }) => theme.device.desktop} {
      
    }
`