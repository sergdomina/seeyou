import { ImageThumb } from './GlobalImage.styled';
import dafaultImage from './pngegg.png';
export const GlobalImage = ({
  mb = 0,
  url = dafaultImage,
  descr = 'our img',
}) => {
  return (
    <ImageThumb mb={mb}>
      <img src={url} alt={descr} />
    </ImageThumb>
  );
};
