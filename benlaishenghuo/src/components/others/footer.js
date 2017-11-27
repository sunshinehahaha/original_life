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
			       		<NavLink activeClassName="haha" to="/home">
			       			<i class="iconfont">&#xe663;</i>
			       			<span>首页</span>
			       		</NavLink>
			       	</li>
			        <li>
			        	<NavLink activeClassName="haha" to="/classify">
			        		<i class="iconfont">&#xe6b0;</i>
			        		<span>分类</span>
			        	</NavLink>
			        </li>
			        <li>
			        	<NavLink activeClassName="haha" to="/#">
			        		<i class="iconfont">&#xe61c;</i>
			        		<span>充值充值充值充值</span>
			        	</NavLink>
			        </li>
			        <li>
			        	<NavLink activeClassName="haha" to="/cart">
			        		<i class="iconfont">&#xe501;</i>
			        		<span>购物车</span>
			        	</NavLink>
			        </li>
			        <li>
			        	<NavLink activeClassName="haha" to="/my">
			        		<i class="iconfont">&#xe502;</i>
			        		<span>我的本来</span>
			        	</NavLink>
			        </li>
			    </ul>
		    </div>
		)
	}
}
