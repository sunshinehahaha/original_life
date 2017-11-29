import React,{Component} from 'react';
import './cart.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom';


export default class Cart extends Component{
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
						<li className = "cart_pic">物体图片</li>
						<li className = "cart_name">
							<p className = "cart_name_name">物品名称</p>
							<div className = "cart_name_mon">
								<p className = "cart_name_onecost">单价</p>
								<span className = "cart_cal">
									<button>-</button>
									<span>num</span>
									<button>+</button>
								</span>
							</div>
						</li>
					</ul>
				</main>
				<footer className = "cart_footer">
					<input type = "checkbox" />全选
					<p className = "cart_allcost">合计：<span></span></p>
					<p className = "cart_pay">去结算(免运费)</p>
				</footer>
			</div>
		)
	}
}