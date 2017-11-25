import React,{ Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom';

export default class Footer extends Component{
	render(){
		return (
		    <div className="footer">
			    <ul>
			       <li><NavLink activeClassName="haha" to="/home">Home</NavLink></li>
			       <li><NavLink activeClassName="haha" to="/classify">classify</NavLink></li>
			       <li><NavLink activeClassName="haha" to="/cart">cart</NavLink></li>
			       <li><NavLink activeClassName="haha" to="/my">my</NavLink></li>
			    </ul>
		    </div>
		)
	}
}
