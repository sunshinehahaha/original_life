import React, { Component } from 'react';
import './App.css';
import Footer from './components/others/footer.js';

import Home from './components/home/home.js';
import Classify from './components/classify/classify.js';
import Cart from './components/cart/cart.js';
import My from './components/my/my.js';
import './components/others/sass/footer.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route  path="/home" component={Home}/>
          <Route  path="/classify" component={Classify}/>
          <Route  path="/cart" component={Cart}/>
          <Route  path="/my" component={My}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
