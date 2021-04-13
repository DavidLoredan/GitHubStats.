import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import UserStats from './components/UserStats';

import './reset.css';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
      <UserStats />
      <ContactUs />
    </div>
  );
}

export default App;
