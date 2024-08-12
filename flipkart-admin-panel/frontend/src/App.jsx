import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import './App.css'; // Ensure CSS is imported
import ProductPage from './pages/ProductPage';



function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/add-product' element={<AddProduct />} />
            <Route path='/product-page' element={<ProductPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
