import { PopLink, PopButton, PopupBox } from './PopupHeader.styled';
import { Popup } from 'semantic-ui-react';
const PopupHeader = () => (
  <Popup
    content={
      <PopupBox>
        <PopLink to="/terms">Terms of service</PopLink>

        <PopLink to="/privacy">Privacy Policy</PopLink>
      </PopupBox>
    }
    on={['focus', 'hover']}
    position="bottom left"
    pinned
    hoverable
    trigger={<PopButton>Terms & Conditions</PopButton>}
  />
);

export default PopupHeader;
