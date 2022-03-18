import { ImageThumb } from './GlobalImage.styled';
// import defaultImage from './pngegg.png';
const defaultImage =
  'https://images.pexels.com/photos/68767/divers-underwater-ocean-swim-68767.jpeg?cs=srgb&dl=pexels-pixabay-68767.jpg&fm=jpg';
const GlobalImage = ({ mb = 0, url = defaultImage, descr = 'our img' }) => {
  return (
    <ImageThumb mb={mb}>
      <img src={url} alt={descr} />
    </ImageThumb>
  );
};
export default GlobalImage;
