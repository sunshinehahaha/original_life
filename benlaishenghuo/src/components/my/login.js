import React,{ Component } from 'react';
import axios from 'axios';
import './sass/login.css';
export default class Login extends Component{
	constructor(){
		super();
		this.login = this.login.bind(this);
	}
	login(username,psw){
		console.log("login");
		axios.post('/api/login',{
			username:username,
			psw:psw
		})
		.then((res)=>{
			console.log(res);
			if(res.data.code!=1){
				alert("登录失败");
				return;
			}
			alert("登录成功");
			this.props.history.push('./my');
		})
	}
	render(){
		return (
			<div className="login">
				<input type="text" placeholder="用户名" ref="username" className="username"/><br/><br/>
				<input type="text" placeholder="密码" ref="psw" className="username"/><br/><br/>
				<button onClick={()=>{this.login(this.refs.username.value,this.refs.psw.value)}} className="loginU">登录</button>
			</div>
		)
	}
}