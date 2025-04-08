import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import FirstSection from './components/Home/FirstSection';
import SecondSection from './components/Home/SecondSection';
import OurService from './components/Home/OurService';
import Gray from './components/Home/Gray';
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <FirstSection />
    <SecondSection />
    <OurService />
    <Gray />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
