import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import './reset.css';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
