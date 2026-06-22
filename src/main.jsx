import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomeComponents from './home-page/home-comp';
import AboutComponents from './about-page/about-comp';
import ServiceComponents from './service-page/service-comp';
import NewsComponents from './news-page/news-comp';
import ShopComponents from './shop-page/shop-comp';
import ContactComponents from './contact-page/contact-comp';
import Header from './header/header';
import Footer from './footer/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from './scrolltop/scroll';
import Login from './login/login';
import Register from './login/registration/registration';
import Verify from './login/registration/verify';
import { AuthProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomeComponents />} />
          <Route path="/about" element={<AboutComponents />} />
          <Route path="/service" element={<ServiceComponents />} />
          <Route path="/news" element={<NewsComponents />} />
          <Route path="/shop" element={<ShopComponents />} />
          <Route path="/contact" element={<ContactComponents />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget" element={<Verify />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  </>
);
