import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './reset.css';
import UserStats from './components/UserStats';
import StyledApp from './components/styledComponents/Sapp';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <StyledApp className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/user/:login" component={UserStats} />
          <Route path="/contact_us" component={ContactUs} />
        </Switch>

        <Footer />
      </StyledApp>
    </Router>
  );
}

export default App;
