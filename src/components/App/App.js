import { Routes, Route } from 'react-router-dom';
import Layout from '../../components/Layout';
import About from '../../pages/About';
import Products from '../../pages/Products';
import Home from '../../pages/Home';
import Ownership from '../../pages/Ownership';
import Help from '../../pages/Help';
import Download from '../../pages/Download';
import Release from '../../pages/Release';
import Privacy from '../../pages/Privacy';
import Terms from '../../pages/Terms';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="ownership" element={<Ownership />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} />
        <Route path="download" element={<Download />} />
        <Route path="release" element={<Release />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
      </Route>
      <Route path="*" element={<h1>NotFound</h1>} />
    </Routes>
  );
}

export default App;
