import React,{ Component } from 'react';
export default class Login extends Component{
	render(){
		return (
			<div className="login">
				<h2>登录</h2>
				<input type="text" placeholder="用户名"/><br/><br/>
				<input type="text" placeholder="密码"/><br/><br/>
				<button>登录</button>
			</div>
		)
	}
}