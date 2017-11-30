import React,{Component} from 'react';
import './sass/cart.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom';


export default class Cart extends Component{
	constructor(){
		super();
	}
	componentDidMount(){
		this.showCart();
	}
	showCart(){
		console.log("showCart");
		console.log(this);
		axios.get('/api/showCart')
		.then((res)=>{
			console.log(res);
			if(res.data.code!=1){
				// alert(res.data.message);
				this.props.history.push('/my');
			}
		})
	}
	
	render (){
		return (
			<div id = "cart">
				<header className = "cart_header">
					<NavLink to = "/home">
						<i className ="iconfont cart_header_icon">&#xe607;</i>
					</NavLink>			
					<h2>购物车</h2>
					<span>编辑</span>
				</header>
				<main className = "cart_main">
					<ul>
						<li className = "cart_choose"><input type = "checkbox" className = "cart_main_ipt"/></li>
						<li className = "cart_pic">购物图片</li>
						<li className = "cart_name">
							<p className = "cart_name_name">物品名称</p>
							<div className = "cart_name_mon">
								<p className = "cart_name_onecost">单价</p>
								<div className = "cart_cal">
									<div>-</div>
									<div>1</div>
									<div>+</div>
								</div>
							</div>
						</li>
					</ul>
				</main>
				<footer className = "cart_footer">
					<input type = "checkbox" />
					<p className = "cart_chooseall">全选</p>
					<p className = "cart_allcost">合计：<span></span></p>
					<p className = "cart_pay">去结算(免运费)</p>
				</footer>
			</div>
		)
	}
}