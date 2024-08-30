import React, { lazy } from 'react';
import './App.css';
import Header from './AppMenu';
import MapSection from './MapSection';

const Footer = lazy(() => import('../pages/Footer'));

const App = () => {
  return (
    <div className="App">
      <Header />
      <MapSection />
      <Footer />
    </div>
  );
};

export default App;





