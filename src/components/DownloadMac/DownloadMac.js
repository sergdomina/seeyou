import { PopLink, PopButton, PopupBox } from './DownloadMac.styled';
import { Popup } from 'semantic-ui-react';

const DownloadMac = () => (
  <Popup
    content={
      <PopupBox>
        <PopLink href='' target="">
          For Macs with Intel processors
        </PopLink>
        <PopLink href='' target="">
          For Macs with Apple M1
        </PopLink>
      </PopupBox>
    }
    on={['focus', 'hover']}
    position="bottom left"
    pinned
    hoverable
    style={{ zIndex: '2' }}
    trigger={<PopButton>SEEYOU for Mac</PopButton>}
  />
);

export default DownloadMac;
