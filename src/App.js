import React from 'react';
import './index.css';
import StoreContext from './context/store';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import NotFound from './pages/notFound';
import CreateProduct from './pages/createProduct';
import CreatePackage from './pages/createPackage';
import Items from './pages/items';
import Packages from './pages/packages';
import Customers from './pages/customer';
import CreateCategory from './pages/createCategory';

function App() {
  return (
    <StoreContext>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/create-package" element={<CreatePackage />} />
          <Route path="/create-category" element={<CreateCategory />} />
          <Route path="/items" element={<Items />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </StoreContext >
  );
}

export default App;
