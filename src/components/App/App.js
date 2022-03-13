import { Routes, Route } from "react-router-dom";

import { Layout } from "../../components/Layout/Layout";
import { About } from "../../pages/About";
import { Products } from "../../pages/Products";
import { Home } from "../../pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<h1>NotFound</h1>} />
    </Routes>
  );
}

export default App;
