import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import CareersPage from './pages/CareersPage';
import ReferFriendPage from './pages/ReferFriendPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ScrollToTop from './components/ScrollToTop';
//import ChatBot from './components/ChatBot';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Auth Routes - without Layout */}
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="/auth/login" element={<LoginPage />} />

        {/* Main App Routes - with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="careers" element={<CareersPage />} />

          {/* ✅ Protected Route */}
          <Route
            path="careers/refer-a-friend"
            element={
              <PrivateRoute>
                <ReferFriendPage />
              </PrivateRoute>
            }
          />

          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
