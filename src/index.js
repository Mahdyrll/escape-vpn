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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
