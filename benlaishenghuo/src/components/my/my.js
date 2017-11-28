import React,{Component} from 'react';
import Login from './login.js';
import Regist from './regist.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom';

export default class My extends Component{
	render (){
		return (
			<Router>
				<div>
					<h2>我的</h2>
					<Route  path="/login" component={Login}/>
	          		
					<Route path="/regist" component = {Regist}/>
					<NavLink activeClassName="active" to="/login">
				 		登录
				    </NavLink>
				    <NavLink activeClassName="active" to="/regist">
				 		注册
				    </NavLink>
					
				</div>
			</Router>
		)
	}
}