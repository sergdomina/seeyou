import { PopLink, PopButton, PopupBox } from './PopupHeader.styled';
import { Popup } from 'semantic-ui-react';
import termsOfService from '../../PDF/SEEYOU_TERMS_OF_SERVICE.pdf';
import privacyStatement from '../../PDF/SEEYOU_PRIVACY_STATEMENT.pdf';
const PopupHeader = () => (
  <Popup
    content={
      <PopupBox>
        <PopLink href={termsOfService} target="_blank">
          Terms of service
        </PopLink>
        <PopLink href={privacyStatement} target="_blank">
          Privacy Policy
        </PopLink>
      </PopupBox>
    }
    on={['focus', 'hover']}
    position="bottom left"
    pinned
    hoverable
    style={{ zIndex: '2' }}
    trigger={<PopButton>Terms & Conditions</PopButton>}
  />
);

export default PopupHeader;
