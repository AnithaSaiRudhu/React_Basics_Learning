import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import CreateProduct from './Pages/CreateProduct';
import Product from './Pages/Product';
import ProductDetails from './Pages/ProductDetails';
import ProductList from './Pages/ProductList';
import NotFound from './NotFound';
import CryptoDetail from './CryptoDetail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path="cryptodetail">
      <Route path=':cryptoSymbol' element={<CryptoDetail/>}></Route>
      <Route path=':cryptoSymbol/:id' element={<CryptoDetail/>}></Route>
    </Route>
    <Route path="product">
      <Route path= "" element={<Product/>}></Route>
      <Route path='createproduct' element={<CreateProduct/>}></Route>
      <Route path='productdetails' element={<ProductDetails/>}></Route>                
      <Route path='productdetails/:prodID' element={<ProductDetails/>}></Route>          
      <Route path='productlist' element={<ProductList/>}></Route> 
    </Route>
    <Route path="*" element={<NotFound/>}></Route>       
  </Routes>    
  </BrowserRouter>
);

