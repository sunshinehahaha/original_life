import React, { Component } from 'react';
import './App.css';
import Footer from './components/others/footer.js';

import Home from './components/home/home.js';
import Classify from './components/classify/classify.js';
import Cart from './components/cart/cart.js';
import My from './components/my/my.js';
import Storebaby from './components/classify/storebaby.js';
import Fruit from './components/classify/fruit.jsx';
import Vegetables from './components/classify/vegetables.jsx';
import Login from './components/my/login.js';
import Regist from './components/my/regist.js';

import Detail from './components/detail/detail.jsx';
import './components/others/sass/footer.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    console.log(this);
    var props = this.props;
    return (
      <Router>
        <div className="App">
              <Switch>
                <Redirect  exact from="/" to="/home"/>
                <Route  path="/home" component={Home}/>
                <Route  path="/classify" render={(props)=>
                  <Classify {...props}> 
                      <Switch>
                        <Route  path={`${props.match.url}/storebaby`} component={Storebaby}/>
                        <Route  path={`${props.match.url}/fruit`} component={Fruit}/>
                        <Route  path={`${props.match.url}/vegetables`} component={Vegetables}/>
                        <Redirect  from="/classify" to={`${props.match.url}/storebaby`}/>
                      </Switch>
                  </Classify>
                }/>
                <Route  path="/cart" component={Cart}/>
                <Route path="/my" render={(props)=>
                  <My {...props}>
                      <Switch>
                        <Route  path={`${props.match.url}/login`} component = {Login}/>
                        <Route  path={`${props.match.url}/regist`} component = {Regist}/>
                      </Switch>
                  </My>
                }/>
                <Route  path="/detail/:fid" component={Detail}/>

              </Switch>
          
          <Footer/>
       
        </div>
      </Router>
    );
  }
}
 // <Route exact path={`${props.match.url}/login`} component={Login}/>
 // <Route exact path='/my/login' component = {Regist}/>
 // <Route exact path={`${props.match.url}/login`}  component = {Regist}/>
export default App;
