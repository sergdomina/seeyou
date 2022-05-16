import { PopLink, Link, PopButton, PopupBox } from './PopupHeader.styled';
import { Popup } from 'semantic-ui-react';
import termsOfService from '../../PDF/SEEYOU_TERMS_OF_SERVICE.pdf';
import privacyStatement from '../../PDF/SEEYOU_PRIVACY_STATEMENT.pdf';



const PopupHeader = () => (

  useOnClickOutside(node, () => toggleMenu(false), isOpenMobileMenu);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const { pathname } = useLocation();
  const isDownloadPage = pathname !== '/providers-zoom';

  <Popup
    content={
      <PopupBox>
        <PopLink href={termsOfService} target="_blank">
          Terms of service
        </PopLink>
        <PopLink href={privacyStatement} target="_blank">
          Privacy Policy
        </PopLink>
        <Link to='/providers-zoom' onClick={toggleMenu} >
          Zoom
        </Link>
        <Link >
          Privacy Policy
        </Link>
      </PopupBox>
    }
    on={['focus', 'hover']}
    position="bottom left"
    pinned
    hoverable
    style={{ zIndex: '2' }}
    trigger={<PopButton>More</PopButton>}
  />
);

export default PopupHeader;
