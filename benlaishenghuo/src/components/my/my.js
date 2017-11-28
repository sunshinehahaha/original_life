import React,{Component} from 'react';
import Login from './login.js';
import Regist from './regist.js';
import './sass/my.css';
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
				<div className="my">
					<h2>
						<Link to="/home">
							<i className="iconfont">&#xe607;</i>
						</Link>
						我的
					</h2>
					<NavLink activeClassName="active"  className="loginRe" to="/login">
					 	登录
				    </NavLink>
				    <NavLink activeClassName="active" className="loginRe" to="/regist">
				 		注册
				    </NavLink>
					<div className="loginRegist">
						<Route  path="/login" component={Login}/>
	          		
						<Route path="/regist" component = {Regist}/>
						
					</div>
				</div>
			</Router>
		)
	}
}