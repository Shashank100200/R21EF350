import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { Container } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<AllProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;