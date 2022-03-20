import DownloadMobileFooter from '../../components/DownloadMobileFooter';
import MediaQuery from '../../components/MediaQuery';
const Products = () => {
  return (
    <div>
      <h2>Products</h2>
      <MediaQuery device={'mobile'}>
        <DownloadMobileFooter />
      </MediaQuery>
    </div>
  );
};
export default Products;
