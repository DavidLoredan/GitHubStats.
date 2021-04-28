import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import './reset.css';
import './app.scss';
import UserStats from './components/UserStats';

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
          <Route path="/user/:login" component={UserStats} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
