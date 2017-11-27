import React,{Component} from 'react';
import './home.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom';

import Header from '../others/header.js';



class Home extends Component{
	render (){
		return (
			<div id = "home">
				<header className = "home_header">
					<Header/>
					
					<div className = "home_header_login">
						<i className ="iconfont">&#xe502;</i>
					</div>
				</header>
				<nav className = "home_nav">
					<ul>
						<li>
							<NavLink activeClassName = "home_green" to="/home">推荐</NavLink>
						</li>
						<li>
							<NavLink activeClassName = "home_green" to="/home">水果</NavLink>
						</li>
						<li>
							<NavLink activeClassName = "home_green" to="/home">肉禽</NavLink>
						</li>
						<li>
							<NavLink activeClassName = "home_green" to="/home">水产</NavLink>
						</li>
						<li>
							<NavLink activeClassName = "home_green" to="/home">蔬菜</NavLink>
						</li>
						<li>
							<NavLink activeClassName = "home_green" to="/home">粮油</NavLink>
						</li>
						<li>
							<NavLink activeClassName = "home_green" to="/home">乳品</NavLink>
						</li>
						<li>
							<NavLink activeClassName = "home_green" to="/home">酒饮</NavLink>
						</li>
						<li>
							<NavLink activeClassName = "home_green" to="/home">零食</NavLink>
						</li>
						<li>
							<NavLink activeClassName = "home_green" to="/home">厨具</NavLink>
						</li>
					</ul>
				</nav>
				<div className = "home_slider"></div>
				<main className = "home_list"></main>
			</div>
		)
	}
}


export default Home;