import { PopLink, PopButton, PopupBox } from './DownloadWin.styled';
import { Popup } from 'semantic-ui-react';
import { click } from '@testing-library/user-event/dist/click';

const DownloadWin = () => (
  <Popup
    content={
      <PopupBox>
        <PopLink href='' target="">
          For Windows X32
        </PopLink>
        <PopLink href='' target="">
          For Windows X64
        </PopLink>
      </PopupBox>
    }
    on={['click']}
    position="bottom left"
    pinned
    hoverable
    style={{ zIndex: '2' }}
    trigger={<PopButton>SEEYOU for Windows</PopButton>}
  />
);

export default DownloadWin;
