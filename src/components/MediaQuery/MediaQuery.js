import Media from 'react-media';
import { size } from '../../constants/mediaSize';
const MediaQuery = ({ device, children }) => {
  return (
    <Media
      queries={{
        mobile: `(min-width: ${size.mobile})and (max-width: 768px)`,
        tablet: `(min-width: ${size.tablet}) `,
        desktop: `(min-width: ${size.desktop})`,
      }}
    >
      {matches => matches[device] && children}
    </Media>
  );
};
export default MediaQuery;
