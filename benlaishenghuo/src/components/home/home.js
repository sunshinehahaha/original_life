import React,{Component} from 'react';
import './home.css';
import Header from '../others/header.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
// import {Button} from antd';


// 轮播图
import { Carousel } from 'antd';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
	
// 轮播图结束


class Home extends Component{
	render (mountNode){
		return (
			<div id = "home">
				<header className = "home_header">
					<Header/>
				</header>
				<nav className = "home_nav">
					<ul>
						<li>
							<NavLink activeClassName = "active" to="/home">推荐</NavLink>
						</li>
						<li>
							<NavLink activeClassName = "active" to="/home">水果</NavLink>
						</li>
						<li>
							<NavLink activeClassName = "active" to="/home">肉禽</NavLink>
						</li>
						<li>
							<NavLink activeClassName = "active" to="/home">水产</NavLink>
						</li>
						<li>
							<NavLink activeClassName = "active" to="/home">蔬菜</NavLink>
						</li>
						<li>
							<NavLink activeClassName = "active" to="/home">粮油</NavLink>
						</li>
						<li>
							<NavLink activeClassName = "active" to="/home">乳品</NavLink>
						</li>
						<li>
							<NavLink activeClassName = "active" to="/home">酒饮</NavLink>
						</li>
						<li>
							<NavLink activeClassName = "active" to="/home">零食</NavLink>
						</li>
						<li>
							<NavLink activeClassName = "active" to="/home">厨具</NavLink>
						</li>
					</ul>
				</nav>
				<div className = "home_slider">
					  <Carousel autoplay>
					    <div><h3>1</h3></div>
					    <div><h3>2</h3></div>
					    <div><h3>3</h3></div>
					    <div><h3>4</h3></div>
					  </Carousel>
				</div>
				<main className = "home_list">
					<div className = "home_list_new">
						<NavLink to = "/classify">这是可以跳转的新人专享的图片</NavLink>
					</div>
					<ul className = "home_list_ul">
						<li>
							<NavLink to = "/classify">充值</NavLink>
						</li>
						<li>
							<NavLink to = "/classify">银行活动</NavLink>
						</li>
						<li>
							<NavLink to = "/classify">本来礼品</NavLink>
						</li>
						<li>
							<NavLink to = "/classify">兑换专区</NavLink>
						</li>
					</ul>
					<div className = "home_list_org">
						<NavLink to = "/classify">这是一个可以跳转的橙子大图片</NavLink>
					</div>
					<div className = "home_list_loop">
						<NavLink to = "/classify">这是一些循环出来的图片</NavLink>
					</div>
				</main>
			</div>
		)
	}
}


export default Home;