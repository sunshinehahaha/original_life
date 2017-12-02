import React,{Component} from 'react';
import './sass/home.css';
import axios from 'axios';
import Header from '../others/header.js';
import { Spin } from 'antd';
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
	constructor(){
		super();
		this.state = {
			lunbo:[],
			datu:"",
			xiaotu:[],
			ban:[],
			last:[],
		}
	}
	componentDidMount(){
		this.getImg();
		
	}
	getImg(){
		var that = this;
		axios.post("/api/showImg")
		.then((res)=>{
			console.log(res);
			that.state.lunbo = res.data.lunbo;
			that.state.datu = res.data.datu[0];
			that.state.xiaotu = res.data.xiaotu;
			that.state.ban = res.data.ban;
			that.state.last = res.data.last;
			that.setState({
				lunbo:that.state.lunbo,
				datu:that.state.datu,
				xiaotu:that.state.xiaotu,
				ban:that.state.ban,
				last:that.state.last
			})
		})
	}
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
					  {
					  	this.state.lunbo.map((item,index)=>{
					  		return (
								<div key={index}>
									<div><img src={item.imgUrl}/></div>
								</div>
					  		)
					  	})
					  }
					    
					  </Carousel>
				</div>
				<main className = "home_list">
					<div className = "home_list_new">
						<NavLink to = "/classify">
							<img src={this.state.datu.imgUrl}/>
						</NavLink>
					</div>
					<ul className = "home_list_ul">
						{
							this.state.xiaotu.map((item,index)=>{
								return (
									<li key={index}>
										<NavLink to = "/classify">
											<img src={item.imgUrl}/>
										</NavLink>
									</li>
								)
							})
						}
						
					</ul>
					<div className = "home_list_org">
					{
						this.state.ban.map((item,index)=>{
							return (
								<div key={index}>
									<NavLink to = "/classify">
										<img src={item.imgUrl}/>
									</NavLink>
								</div>
							)
						})
						
					}
					</div>
					<div className = "home_list_loop">
						{
							this.state.last.map((item,index)=>{
								return (
									<div key={index}>
										<NavLink to = "/classify">
											<img src={item.imgUrl}/>
										</NavLink>
									</div>
								)
							})
						
					}
					</div>
				
				</main>

			</div>
		)
	}
}


export default Home;