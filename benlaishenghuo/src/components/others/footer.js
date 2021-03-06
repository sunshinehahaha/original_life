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
			        <li>
			       		<NavLink activeClassName="active" to="/home">
			       			<i className ="iconfont">&#xe663;</i>
			       			<span>首页</span>
			       		</NavLink>
			       	</li>
			        <li>
			        	<NavLink activeClassName="active" to="/classify">
			        		<i className ="iconfont">&#xe6b0;</i>
			        		<span>分类</span>
			        	</NavLink>
			        </li>
			        <li>
			        	<NavLink activeClassName="active" to="/#">
			        		<i className ="iconfont">&#xe61c;</i>
			        		<span>充值</span>
			        	</NavLink>
			        </li>
			        <li>
			        	<NavLink activeClassName="active" to="/cart">
			        		<i className ="iconfont">&#xe501;</i>
			        		<span>购物车</span>
			        	</NavLink>
			        </li>
			        <li>
			        	<NavLink activeClassName="active" to="/my">
			        		<i className ="iconfont">&#xe502;</i>
			        		<span>我的本来</span>
			        	</NavLink>
			        </li>
			    </ul>
		    </div>
		)
	}
}
