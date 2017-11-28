import React,{Component} from 'react';
import './sass/my.css';
import LoginRoute from './LoginRoute';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom';

export default class My extends Component{
	componentDidMount() {
		console.log(this.props.match);
		console.log({...this.props});//{...this.props解构赋值}

	}
	render (){
		return (
			<Router>
				<div className="my">
					<h2>
						<Link to="/">
							<i className="iconfont">&#xe607;</i>
						</Link>
						我的
					</h2>
					<NavLink activeClassName="active"  className="loginRe" to={`${this.props.match.url}/login`}>
					 	登录
				    </NavLink>
				    <NavLink activeClassName="active" className="loginRe" to={`${this.props.match.url}/regist`}>
				 		注册
				    </NavLink>
					<div className="loginRegist">
						
						<LoginRoute {...this.props}></LoginRoute>

					</div>
				</div>
			</Router>
		)
	}
}