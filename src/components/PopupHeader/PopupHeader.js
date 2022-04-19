import { PopLink, PopButton } from './PopupHeader.styled';
import './popup.css';
import { Popup } from 'semantic-ui-react';
const PopupHeader = () => (
  <Popup
    content={
      <div className="popup">
        <PopLink to="/terms">Terms of service</PopLink>

        <PopLink to="/privacy">Privacy Policy</PopLink>
      </div>
    }
    on={['focus', 'hover']}
    position="bottom left"
    pinned
    hoverable
    trigger={<PopButton>Terms & Conditions</PopButton>}
  />
);

export default PopupHeader;
