import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './Home';
import Event from './Event';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/event" component={Event} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
