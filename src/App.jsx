import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import './reset.css';
import './app.scss';
import ContactUs from './components/ContactUs';
import UserStats from './components/UserStats';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/toto/1" component={UserStats} />

          <Route path="/contactus">
            <ContactUs />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
